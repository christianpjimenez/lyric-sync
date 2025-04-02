import { useState } from 'react'
import './App.css'
import Header from './Header.jsx'
import LyricInput from './LyricInput.jsx';
import LyricDisplay from './LyricDisplay.jsx';

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

      <LyricDisplay song={song} />
      
    </>
  )
}

export default App
