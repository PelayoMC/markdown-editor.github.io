import "./App.scss";
import Editor from "./components/Editor";
import Previewer from "./components/Previewer";

function App() {
  return (
    <div className="app">
      <Editor />
      <Previewer />
    </div>
  );
}

export default App;
