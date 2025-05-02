const express = require('express');
const router = express.Router();
const Song = require('../models/Song');

//Add a new song

router.post('/', async (req, res) => {
  console.log("Received request body:", req.body); // Log the request body for debugging
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
    console.log("Fetched songs:", songs); // Log the fetched songs for debugging
    res.json(songs); // Respond with the list of songs
  } catch (err) {
    res.status(500).json({ error: err.message }); 
  }
});

router.get('/songs', async (req, res) => {
  try {
    res.json("Hello hello"); // Respond with the list of songs
  } catch (err) {
    res.status(500).json({ error: err.message }); 
  }
});

// Get a song by ID
router.get('/:id', async (req, res) => {
  try {
    const song = await Song.findById(req.params.id); // Find a song by its ID
    if (!song) return res.status(404).json({ message: 'Song not found' }); // If not found, respond with 404
    res.json(song); // Respond with the found song
  } catch (err) {
    res.status(500).json({ error: err.message }); 
  }
});

module.exports = router; 