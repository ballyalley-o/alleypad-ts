import './action-bar.css'
import { useActions } from "../hooks/use-actions"
import { HiChevronUp, HiChevronDown } from "react-icons/hi";
import { BiNoEntry } from "react-icons/bi";


interface ActionbarProps {
    id: string
}

const Actionbar: React.FC<ActionbarProps> = ({ id }) => {
    const { moveCell, deleteCell } = useActions()

    return (
      <div className="action-bar absolute">
        <button
          className="btn btn-success"
          onClick={() => moveCell(id, "up")}
        >
          <HiChevronUp />
        </button>
        <button
          className="btn btn-info"
          onClick={() => moveCell(id, "down")}
        >
          <HiChevronDown />
        </button>
        <button className="btn btn-error" onClick={() => deleteCell(id)}>
          <BiNoEntry />
        </button>
      </div>
    );

}


export default Actionbar