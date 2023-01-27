import "./index.css";
import CodeCell from "./components/code-cell";
import TextEditor from "./components/text-editor";
import { Provider } from "react-redux";
import store from "./state/store";

const App = () => {
  return (
    <div>
      <CodeCell />
      <br></br>
      <TextEditor />
    </div>
  );
};

export default App;


