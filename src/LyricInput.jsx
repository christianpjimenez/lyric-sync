function LyricInput({song, setSong}) {
    return (
        <div className="card">
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
        </div>
    )
}

export default LyricInput;