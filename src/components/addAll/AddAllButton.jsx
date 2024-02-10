import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import "./AddAll.css"
import { faPlus } from "@fortawesome/free-solid-svg-icons"
import { useState } from "react";
import MusicUploadModal from "../musicUpload/MusicUploadForm";
const AddAllButton = () => {
  const [modalOpen, setModalOpen] = useState(false);
  const handleCloseModal = () => {
    setModalOpen(false)
  };
  const handleOpenModal = () => {
    setModalOpen(true);
  };
  return (
    <>
      <div className="add" onClick={handleOpenModal}>
        <button className="addbtn"> <FontAwesomeIcon icon={faPlus} className="iconplus" />Add All</button>
        <MusicUploadModal handleCloseModal={handleCloseModal} modalOpen={modalOpen} />
        <button className="btnchevron"><div className="triangleadd"></div></button>
      </div>
    </>
  )
}
export default AddAllButton