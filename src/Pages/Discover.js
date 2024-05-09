import React, { useState, useEffect } from 'react';
import Header from '../components/Header';
import NavBar from '../components/NavBar';
import './Discover.css'; // Import CSS file for component styling

const Discover = () => {
    const [recommendedTracks, setRecommendedTracks] = useState([]); // initialization
    const [loading, setLoading] = useState(true);
    const [currentTrack, setCurrentTrack] = useState(null);

    useEffect(() => { // introduced use effect hook
        const fetchRecommendedTracks = async () => {
            const recommendedTracksUrl = 'https://spotify23.p.rapidapi.com/recommendations/?seed_artists=0oSGxfWSnnOXhD2fKuz2Gy&seed_tracks=3dRfiJ2650SZu6GbydcHNb&seed_genres=&limit=100';
            const options = {
                method: 'GET',
                headers: {
                    'X-RapidAPI-Key': '3509af7823msha08596116c3770ap1b2ab7jsna490778b83c0',
                    'X-RapidAPI-Host': 'spotify23.p.rapidapi.com'
                }
            };
          

export default Discover;
