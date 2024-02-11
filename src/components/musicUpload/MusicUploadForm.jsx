import React, {useState} from 'react';
import "./MusicUploadForm.css"
import {useDispatch, useSelector} from 'react-redux';
import {addMusic} from '../../features/MusicUploadSlice';
import Modal from "../musicUploadForm/Modal";


const MusicUploadModal = ({close}) => {
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
            dispatch(addMusic({
                id: Math.random(),
                songName: selectedFile.name,
                artistName: artist,
                trackNumber: musicArray.length + 1,
                file: selectedFile.name,
                src: URL.createObjectURL(selectedFile)
            }))
            close()
        } else {
            alert("Please enter artistName")
        }

    }
    return (
        <Modal close={close}>
            <p>Music Upload</p>
            <label htmlFor="fileInput">
                Select Mp3 or Wav file:
                <br/>
                <input type="file" onChange={handleFileChange} accept=".mp3, .wav"/>
            </label>
            <label>
                Selected file:{selectedFile && selectedFile.name}
                <br/>
                <input
                    type="text"
                    value={artist}
                    style={{width: '70%'}}
                    placeholder="ArtistName"
                    onChange={(e) => {
                        setArtist(e.target.value);
                    }}
                />
            </label>
            <button onClick={handleUpload} disabled={!selectedFile}>
                Upload
            </button>
        </Modal>
    );
};


export default MusicUploadModal;
