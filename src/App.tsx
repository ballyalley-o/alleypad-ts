import "./index.css";
import { Provider } from "react-redux";
import store from "./state/store";
import CellList from "./components/cell-list";
import Header from "./components/header";

const App = () => {
  return (
    <Provider store={store}>
      <div>
        <Header />
        <CellList />
      </div>
    </Provider>
  );
};

export default App;


