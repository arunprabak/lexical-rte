import { useState } from "react";
import "./App.css";
import { Editor } from "./editor";

function App() {
  const [values, setValues] = useState([]);
  const [currentValue, setCurrentValue] = useState("");
  return (
    <div className="md:container mx-auto my-5">
      <h1>Rich text editor</h1>
      <Editor
        onSave={(editorState) => {
          const stringifiedEditorState = JSON.stringify(editorState.toJSON());
          setValues((prev) => [...prev, stringifiedEditorState]);
        }}
        value={currentValue}
        onChange={(value) => {
          setCurrentValue(value);
        }}
      />
      <div className="my-5 bg-white h-96 rounded-md overflow-auto">
        {values.map((value, index) => {
          return (
            <div key={index}>
              <h1>{value}</h1>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default App;
