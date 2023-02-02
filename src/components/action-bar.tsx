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
          data-modal-target="#modal"
          className="badge badge-success"
          onClick={() => moveCell(id, "up")}
        >
          <HiChevronUp />
        </button>
        <button
          className="badge badge-info"
          onClick={() => moveCell(id, "down")}
        >
          <HiChevronDown />
        </button>
        <button className="badge badge-error" onClick={() => {
          if (window.confirm("Are you sure you want to delete this cell?")) {
          deleteCell(id)} else {return}
          }}>
          <BiNoEntry />
        </button>
      </div>
    );

}


export default Actionbar

