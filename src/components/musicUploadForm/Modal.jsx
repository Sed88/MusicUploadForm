import React from 'react';
import "../musicUpload/MusicUploadForm.css"

const Modal = ({children, close}) => {
    return (
        <div
            className="modal"
            onClick={close}
        >
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                {children}
            </div>
        </div>
    );
};

export default Modal;