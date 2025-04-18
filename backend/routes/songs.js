const express = require('express');
const router = express.Router();
const Song = require('../models/Song');

//Add a new song

router.post('/', async (req, res) => {
  try {
    const newSong = new Song(req.body); // Create a new song instance with the request body
    const savedSong = await newSong.save(); // Save the new song to the database
    res.status(201).json(savedSong); 
  } catch (err) {
    res.status(500).json({ error: err.message }); 
  }
});

// Get all songs

router.get('/', async (req, res) => {
  try {
    const songs = await Song.find(); // Retrieve all songs from the database
    res.json(songs); // Respond with the list of songs
  } catch (err) {
    res.status(500).json({ error: err.message }); 
  }
});

module.exports = router; 