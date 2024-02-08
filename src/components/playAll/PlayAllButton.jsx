import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import "./PlayAllButton.css"
import { faPlay } from "@fortawesome/free-solid-svg-icons"
const PlayAllButton = () => {
    return (
        <>
            <div className="play">
                <button className="playbtn"> <FontAwesomeIcon icon={faPlay} className="iconplay" />Play All</button>
                <button className="btnchevron"><div className="triangleplay"></div></button>
            </div>
        </>
    )
}
export default PlayAllButton