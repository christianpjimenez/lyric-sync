import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL;

// Fetch all songs
export const fetchSongs = () => {return axios.get(`${API_URL}/api/songs`);};

// Fetch a song by ID
export const fetchSongById = (id) => {return axios.get(`${API_URL}/api/songs/${id}`);};

// Add a new song
export const addSong = (songData) => {return axios.post(`${API_URL}/api/songs`, songData);};

// Update a song by ID
export const updateSong = (id, updatedData) => {return axios.put(`${API_URL}/api/songs/${id}`, updatedData);};

// Delete a song by ID
export const deleteSong = (id) => {return axios.delete(`${API_URL}/api/songs/${id}`);};

