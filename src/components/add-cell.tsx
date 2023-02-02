import './add-cell.css';
import { useActions } from "../hooks/use-actions";
import { BiPlus } from "react-icons/bi";

interface AddCellProps {
    prevCellId: string | null,
    forceVisible?: boolean
}

const AddCell: React.FC<AddCellProps> = ({ forceVisible, prevCellId }) => {
    const { insertCellAfter } = useActions()

    return (
      <div className={`add-cell ${forceVisible && "force-visible"}`}>
        <div className="add-buttons">
          <button
            className="badge indicator text-code-md"
            onClick={() => insertCellAfter(prevCellId, "code")}
            >
            <span>
              <BiPlus style={{ fontSize: "1.3rem", color: "white" }} />
            </span>
            <span>code</span>
          </button>
          <button
            className="badge indicator text-code-md"
            onClick={() => insertCellAfter(prevCellId, "text")}
          >
            <span>
              <BiPlus style={{ fontSize: "1.3rem", color: "white" }} />
            </span>
            <span>md</span>
          </button>
          <div className="divider"></div>
        </div>
      </div>
    );
}


export default AddCell
