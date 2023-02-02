import "./index.css";
import { Provider } from "react-redux";
import store from "./state/store";
import CellList from "./components/cell-list";
import Header from "./components/header";
import Footer from "./components/footer";

const App = () => {
  return (
    <Provider store={store}>
      <div>
        <Header />
        <CellList />
        <Footer />
      </div>
    </Provider>
  );
};

export default App;


