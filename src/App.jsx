import { useState } from 'react'
import './App.css'

function App() {

  const [lyrics, setLyrics] = useState("");
  const [songTitle, setSongTitle] = useState("");
  const [artist, setArtist] = useState("");

  return (
    <>
      <div>
        <h1 className="title">
          LyricSync
        </h1>
      </div>
      
      <div className="card">
        <input
          type="text"
          placeholder="Enter song title..."
          value={songTitle}
          onChange={(e) => setSongTitle(e.target.value)}
        />
        <br />
        <input 
          type="text"
          placeholder="Enter artist or band name..."
          value={artist}
          onChange={(e) => setArtist(e.target.value)}
        />
        <br />
        <label htmlFor="lyricsArea">Lyrics:</label>
        <br />
        <textarea
          id="lyricsArea"
          placeholder="Enter lyrics here..."
          value={lyrics}
          onChange={(e) => setLyrics(e.target.value)}
          rows="6"
          cols="30"
        />

        <h2 className='song-title'>
          <strong>
            {songTitle || "Untitled"} 
          </strong>
        </h2>
        <h3 className='artist-name'>
          <strong>
            {artist || "Unknown artist"} 
          </strong>
        </h3>
        <p>
          {lyrics
          ? lyrics.split('\n').map((line, index) => (
            <span key={index}>
              {line}
              <br />
            </span>
          ))
        : "Type the lyrics to see them here."}
        </p>
      </div>
    </>
  )
}

export default App
