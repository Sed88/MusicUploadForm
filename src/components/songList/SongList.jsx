import { useDispatch, useSelector } from "react-redux"
import SongRow from "../songRow/SongRow"
import { useEffect } from "react"
import { getMusic } from "../../features/MusicUploadSlice"
const SongList = () => {
    const musicArray = useSelector(state => state.music.musicArray)
    const searchInput = useSelector(state => state.music.searchInput)
    const searchProducts = useSelector(state => state.music.searchProducts)
    const dispatch = useDispatch()
    useEffect(() => {
        dispatch(getMusic())
    }, [])
    return (
        <>
            {!searchInput.length ? musicArray.map((song) => (
                <SongRow key={song.id} song={song} /> //for each song
            )) : searchProducts.map((song) => (
                <SongRow key={song.id} song={song} /> //for each song
            ))}
        </>
    )
}
export default SongList