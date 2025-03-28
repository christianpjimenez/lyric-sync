import { useState } from 'react'
import './App.css'

function App() {

  const [lyrics, setLyrics] = useState("");

  return (
    <>
      <div>
        <h1 className="title">
          LyricSync
        </h1>
      </div>
      
      <div className="card">
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
