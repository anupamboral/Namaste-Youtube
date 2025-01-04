import { Provider } from "react-redux";
import Body from "./components/Body";
import Head from "./components/Head";
import store from "./utils/store";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainContainer from "./components/MainContainer";
import WatchPage from "./components/WatchPage";
//*2.14
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
    ],
  },
]);
function App() {
  return (
    <div className="App bg-black">
      <Provider store={store}>
        <Head />
        <RouterProvider router={appRouter} />
        {/**see line 108 of notes to see why we used router Provider here instead of Body component*/}
      </Provider>
    </div>
  );
}

export default App;
