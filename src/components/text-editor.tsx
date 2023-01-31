import './text-editor.css'
import { useState, useEffect, useRef } from 'react'
import MDEditor from "@uiw/react-md-editor";
import { Cell } from '../state'
import { useActions } from '../hooks/use-actions'

interface TextEditorProps {
    cell: Cell
}


const TextEditor: React.FC<TextEditorProps> = ({ cell }) => {
    const ref = useRef<HTMLDivElement | null>(null)
    const [editing, setEditing] = useState(false)
    const { updateCell } = useActions()



    useEffect(() => {
        const listener = (event: MouseEvent) => {
            setEditing(true)
            if (
                ref.current &&
                event.target &&
                ref.current.contains(event.target as Node)
                ) {
                return
                }

            setEditing(false)
            }
        document.addEventListener('click', listener, { capture: true })

        return () => {
            document.removeEventListener('click', listener, { capture: true } )
        }
    }, [])


    if (editing) {
        return (
            <div ref={ref} className="text-editor">

                <MDEditor
                    value={cell.content}
                    onChange={(v) => {
                    updateCell(cell.id, v || '')
                }}/>
            </div>
        )
    }
    return (
      <div className="text-editor" onClick={() => setEditing(true)}>
        <div className="text-editor-div border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
          <MDEditor.Markdown source={cell.content || '<h1>Click to Edit</h1>'} />
        </div>
      </div>
    );
}


export default TextEditor;
