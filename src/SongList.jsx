import { useEffect, useState} from "react";
import {fetchSongs} from "./api/lyrics";

function SongList() {
    const [songs, setSongs] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const loadSongs = async () => {
            try {
                const response = await fetchSongs();
                setSongs(response.data);
            } catch (error) {
                console.error("Error fetching songs:", error);
            } finally {
                setLoading(false);
            }
        }

        loadSongs();
    }, []);

    if (loading) return <div>Loading...</div>;
    if (!songs.length) return <div>No songs available</div>;

    return (
        <div className="song-list">
            {songs.map((song) => (
                <div key={song._id} className="song-item">
                    <h3>{song.title}</h3>
                    <p>{song.artist}</p>
                </div>
            ))}
        </div>
    );
}

export default SongList;