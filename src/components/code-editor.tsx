import './code-editor.css'
import './syntax.css'
import { useRef, useState } from "react";
import MonacoEditor, { EditorDidMount } from "@monaco-editor/react";
import prettier from 'prettier';
import parser from 'prettier/parser-babel';
import ConfirmModal from './modal';


interface CodeEditorProps {
    initialValue: string;
    onChange(value: string): void;
}

const CodeEditor: React.FC<CodeEditorProps> = ({ onChange, initialValue }) => {
  const [showModal, setShowModal] = useState(true);
  const editorRef = useRef<any>();


  const onEditorDidMount: EditorDidMount = (getValue, monacoEditor) => {
    editorRef.current = monacoEditor;
    monacoEditor.onDidChangeModelContent(() => {
      onChange(getValue());
    });
    monacoEditor.getModel()?.updateOptions({
      tabSize: 2,
    });
  };

  const onFormatClick = () => {
    //get current value from editor
    const unformatted = editorRef.current.getModel().getValue();

    //format the value
    const formatted = prettier
      .format(unformatted, {
        parser: "babel",
        plugins: [parser],
        useTabs: false,
        semi: true,
        singleQuote: true,
      })
      .replace(/\n$/, ""); //remove new line at end

    //set the formatted value back to the editor
    editorRef.current.setValue(formatted);
  };

  const onClearClick = () => {
    //set true to show modal

    if (editorRef.current.getValue()) {
      if (window.confirm("Are you sure you want to clear the editor?")) {
        editorRef.current.setValue("");
      }
    }
  }

  return (
    <div className="editor-wrapper border-2">
      <button
        className="badge badge-warning button-format"
        type="button"
        onClick={onFormatClick}
      >
        format
      </button>
      <button
        className="badge badge-warning button-clear"
        type="button"
        onClick={onClearClick}
      >
        clear
      </button>

      {/* <ConfirmModal
        show={showModal}
        title="Clear Editor"
        body="Are you sure you want to clear the editor?"
        onConfirm={() => {
          editorRef.current.setValue("");
        }}
        handleClose={() => {}}
      /> */}

      <MonacoEditor
        editorDidMount={onEditorDidMount}
        value={initialValue}
        height="100%"
        language="javascript"
        theme="vs-dark"
        options={{
          wordWrap: "on",
          minimap: { enabled: false },
          folding: false,
          lineNumbersMinChars: 3,
          automaticLayout: true,
        }}
      />
    </div>
  );
}


export default CodeEditor;