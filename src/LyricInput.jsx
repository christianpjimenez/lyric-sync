import {addSong} from './api/lyrics.js';

function LyricInput({song, setSong}) {

    function handleSubmit(e) {
        e.preventDefault();
        const songData = {
            title: song.title,
            artist: song.artist,
            lyrics: song.lyrics
        };
        addSong(songData)
            .then(response => {
                console.log("Song added successfully:", response.data);

                setSong({title: "", artist: "", lyrics: ""});
            })
            .catch(error => {
                console.error("Error adding song:", error);
            });
}

    return (
        <div className="card">
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Enter song title..."
                    value={song.title}
                    onChange={(e) => setSong({...song, title: e.target.value})}
                />
                <br />
                <input 
                    type="text"
                    placeholder="Enter artist or band name..."
                    value={song.artist}
                    onChange={(e) => setSong({...song, artist: e.target.value})}
                />
                <br />
                <label htmlFor="lyricsArea">Lyrics:</label>
                <br />
                <textarea
                    id="lyricsArea"
                    placeholder="Enter lyrics here..."
                    value={song.lyrics}
                    onChange={(e) => setSong({...song, lyrics: e.target.value})}
                    rows="6"
                    cols="30"
                />
                <br />
                <br />
                <button type="submit">Add Song</button>
            </form>
        </div>
    )
}

export default LyricInput;