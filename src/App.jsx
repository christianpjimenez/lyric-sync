import { useState } from 'react'
import './App.css'
import Header from './Header.jsx'

function App() {

  const [song, setSong] = useState({
    title: "Untitled",
    artist: "Unknown artist",
    lyrics: "Type the lyrics to see them here."
  });

  /*const [lyrics, setLyrics] = useState("");
  const [songTitle, setSongTitle] = useState("");
  const [artist, setArtist] = useState("");*/

  return (
    <>
      <Header />
      
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

        <h2 className='song-title'>
          <strong>
            {song.title || "Untitled"} 
          </strong>
        </h2>
        <h3 className='artist-name'>
          <strong>
            {song.artist || "Unknown artist"} 
          </strong>
        </h3>
        <p>
          {song.lyrics
          ? song.lyrics.split('\n').map((line, index) => (
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
