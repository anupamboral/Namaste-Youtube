import { Provider } from "react-redux";
import Body from "./components/Body";
import Head from "./components/Head";
import store from "./utils/store";

function App() {
  return (
    <div className="App bg-black">
      <Provider store={store}>
        <Head />
        <Body />
      </Provider>
    </div>
  );
}

export default App;
