function LyricDisplay({song}) {
    return (
        <div className="card">
            <h2 className='song-title'>
                <strong>
                    {song.title}
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
    )
}

export default LyricDisplay;