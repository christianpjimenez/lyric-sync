import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css'
import Header from './Header.jsx'
import LyricInput from './LyricInput.jsx';
import LyricDisplay from './LyricDisplay.jsx';
import SongList from './SongList.jsx';

function App() {

  const [song, setSong] = useState({
    title: "Untitled",
    artist: "Unknown artist",
    lyrics: "Type the lyrics to see them here."
  });

  return (
    <Router>

      <nav style={{ padding: "10px", background: "#eee" }}>
        <Link to="/">Home</Link>
        <Link to="/songs">All Songs</Link>
        <Link to="/add">Add Song</Link>
        <Link to="/lyrics">Lyrics</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Header />} />
        <Route path="/songs" element={<SongList />} />
        <Route path="/add" element={<><LyricInput song={song} setSong={setSong} /> < LyricDisplay song={song} /></>} />
        <Route path="/lyrics" element={<h1>Lyrics</h1>} />
      </Routes>
      
    </Router>
  )
}

export default App
