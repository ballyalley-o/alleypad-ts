import './add-cell.css';
import { useActions } from "../hooks/use-actions";
import { BiPlus } from "react-icons/bi";

interface AddCellProps {
    nextCellId: string | null
}

const AddCell: React.FC<AddCellProps> = ({ nextCellId }) => {
    const { insertCellBefore } = useActions()

    return (
      <div className="add-cell">
        <div className="add-buttons">
          <button
            className="badge indicator text-code-md"
            onClick={() => insertCellBefore(nextCellId, "code")}
          >
            <span className="hover-icon">
              <BiPlus style={{ fontSize: "1.3rem" }} />
            </span>
            <span>code</span>
          </button>
          <button
            className="badge indicator text-code-md"
            onClick={() => insertCellBefore(nextCellId, "text")}
          >
            <span className="hover-icon">
              <BiPlus style={{ fontSize: "1.3rem" }} />
            </span>
            <span>md</span>
          </button>
          <div className="divider"></div>
        </div>
      </div>
    );
}


export default AddCell
