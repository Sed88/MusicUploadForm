import { useDispatch, useSelector } from "react-redux"
import SongRow from "../songRow/SongRow"
import { useEffect } from "react"
import { getMusic } from "../../features/MusicUploadSlice"
const SongList = () => {
    const musicArray = useSelector(state => state.music.musicArray)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getMusic())
    }, [])
    return (
        <>
            {musicArray.map((song) => (
                <SongRow key={song.id} song={song} />
            ))}
        </>
    )
}
export default SongList