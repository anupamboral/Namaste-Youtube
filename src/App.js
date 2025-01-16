import { Provider } from "react-redux";
import Body from "./components/Body";
// import Head from "./components/Head";//*even after wrapping the Head component inside the <BrowserRouter/> component , still routing was not working thats why put the head inside the body component to make it work
import store from "./utils/store";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainContainer from "./components/MainContainer";
import WatchPage from "./components/WatchPage";
import ResultsPage from "./components/ResultsPage";

import Channel from "./components/Channel";

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <Body />, //* see line 108 of notes to see why we chosen body as main elm of router.
    children: [
      {
        path: "/",
        element: <MainContainer />,
      },
      {
        path: "/watch",
        element: <WatchPage />,
      },
      {
        path: "/results",
        element: <ResultsPage />,
      },

      {
        path: "/channel/:channelId",
        element: <Channel />,
      },
    ],
  },
]);
function App() {
  return (
    <div className="App bg-black">
      <Provider store={store}>
        {/**even after wrapping the Head component inside the <BrowserRouter/> component , still routing was not working thats why put the head inside the body component to make it work */}

        <RouterProvider router={appRouter} />
        {/**see line 108 of notes to see why we used router Provider here instead of Body component and as the head component is not inside rthe router provider that's why to provide the router we wrapped it inside the browserRouter component*/}
      </Provider>
    </div>
  );
}

export default App;
