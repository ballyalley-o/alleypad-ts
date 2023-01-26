import './text-editor.css'
import { useState, useEffect, useRef } from 'react'
import MDEditor from "@uiw/react-md-editor";


const TextEditor: React.FC = () => {
    const ref = useRef<HTMLDivElement | null>(null)
    const [editing, setEditing] = useState(false)
    const [value, setValue] = useState('# Header')

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
                    value={value}
                    onChange={(v) => {
                    setValue(v || '')
                }}/>
            </div>
        )
    }
    return (
      <div className="text-editor" onClick={() => setEditing(true)}>
        <div className="border-r border-b border-l border-gray-400 lg:border-l-0 lg:border-t lg:border-gray-400 bg-white rounded-b lg:rounded-b-none lg:rounded-r p-4 flex flex-col justify-between leading-normal">
          <MDEditor.Markdown source={value} />
        </div>
      </div>
    );
}


export default TextEditor;
