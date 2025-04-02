import { useState } from 'react'
import './App.css'
import Header from './Header.jsx'
import LyricInput from './LyricInput.jsx';

function App() {

  const [song, setSong] = useState({
    title: "Untitled",
    artist: "Unknown artist",
    lyrics: "Type the lyrics to see them here."
  });

  return (
    <>
      <Header />

      <LyricInput song={song} setSong={setSong} />
      
      <div className="card">

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
