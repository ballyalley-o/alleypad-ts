import './code-editor.css'
import { useRef } from "react";
import MonacoEditor, { EditorDidMount } from "@monaco-editor/react";
import prettier from 'prettier';
import parser from 'prettier/parser-babel';
// import "./syntax.css";
// import codeShift from 'jscodeshift';
// import Highlighter from 'monaco-jsx-highlighter'


interface CodeEditorProps {
    initialValue: string;
    onChange(value: string): void;
}

const CodeEditor: React.FC<CodeEditorProps> = ({ onChange, initialValue }) => {
  const editorRef = useRef<any>();
  const onEditorDidMount: EditorDidMount = (getValue, monacoEditor) => {
      editorRef.current = monacoEditor;
      monacoEditor.onDidChangeModelContent(() => {
        onChange(getValue())
       })
       monacoEditor.getModel()?.updateOptions({
        tabSize: 2
       })

      //  const highlighter = new Highlighter(
      //     // @ts-ignore
      //     window.monaco,
      //     codeShift,
      //     monacoEditor
      //  )
      //  highlighter.highLightOnDidChangeModelContent(
      //   //weird code to prevent monaco editor from sending errors to the console
      //     () => {},
      //     () => {},
      //     undefined,
      //     () => {}
      //  )
    }

    const onFormatClick = () => {
        //get current value from editor
        const unformatted = editorRef.current.getModel().getValue()

        //format the value
        const formatted = prettier.format(unformatted, {
            parser: 'babel',
            plugins: [parser],
            useTabs: false,
            semi: true,
            singleQuote: true
        }).replace(/\n$/, '') //remove new line at end

        //set the formatted value back to the editor
        editorRef.current.setValue(formatted)
    }


    const onClearClick = () => {
      editorRef.current.setValue(initialValue)
    }

    return (
      <div className="editor-wrapper">
        <button
          className="badge badge-warning button-format"
          onClick={onFormatClick}
        >
          Format
        </button>
        <button
          className="badge badge-warning button-clear"
          onClick={onClearClick}
        >
          Clear
        </button>
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
        {/* <h1 className="text-5xl font-bold">Alley Pad</h1> */}
      </div>
    );
}


export default CodeEditor;