import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import "./AddAll.css"
import { faPlus } from "@fortawesome/free-solid-svg-icons"
const AddAllButton = () => {
    return (
        <>
            <div className="add">
                <button className="addbtn"> <FontAwesomeIcon icon={faPlus} className="iconplus" />Add All</button>
                <button className="btnchevron"><div className="triangleadd"></div></button>
            </div>
        </>
    )
}
export default AddAllButton