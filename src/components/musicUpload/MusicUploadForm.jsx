import React, { useState } from 'react';
import "./MusicUploadForm.css"
import { useDispatch, useSelector } from 'react-redux';
import { addMusic } from '../../features/MusicUploadSlice';

const MusicUploadModal = ({ modalOpen, handleCloseModal }) => {
    const [artist, setArtist] = useState("")
    const [selectedFile, setSelectedFile] = useState(null);
    const dispatch = useDispatch()
    const musicArray = useSelector(state => state.music.musicArray) // this is array where is files
    const handleFileChange = (event) => {
        const file = event.target.files[0];
        setSelectedFile(file);
    }; //for music upload
    const handleUpload = () => {
        if (artist !== "") {
            dispatch(addMusic({ id: Math.random(), songName: selectedFile.name, artistName: artist, trackNumber: musicArray.length + 1, file: selectedFile.name }))
            console.log("Uploading file:", selectedFile);
        } else {
            alert("Please enter artistName")
        }

    };
    return (
        <>
            {modalOpen && (
                <div
                    className={`modal ${modalOpen ? 'open' : 'closed'}`}
                    onClick={handleCloseModal}
                >
                    <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                        <p>Music Upload</p>
                        <label htmlFor="fileInput">Select Mp3 or Wav file:</label>
                        <input type="file" onChange={handleFileChange} accept=".mp3, .wav" />
                        <span>Selected file:{selectedFile && selectedFile.name}</span>
                        <input
                            type="text"
                            value={artist}
                            style={{ width: '70%' }}
                            placeholder="ArtistName"
                            onChange={(e) => {
                                setArtist(e.target.value);
                            }}
                        />
                        <button onClick={handleUpload} disabled={!selectedFile}>
                            Upload
                        </button>
                    </div>
                </div>
            )}
        </>
    );
};


export default MusicUploadModal;
