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
            try { // introduced try and catch 
                const response = await fetch(recommendedTracksUrl, options);
                const data = await response.json();
                // Extract relevant information from the response
                const tracks = data.tracks.map(track => ({
                    name: track.name,
                    artist: track.artists.map(artist => artist.name).join(', '),
                    album: track.album.name,
                    preview_url: track.preview_url,
                    cover_url: track.album.images.length > 0 ? track.album.images[0].url : null
                }));
                setRecommendedTracks(tracks);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching recommended tracks:', error);
            }
        }
        fetchRecommendedTracks(); // invoke function
    }, []);

    // introduced a function to handle playing and pausing tracks when playing
    const handlePlayTrack = (previewUrl) => {
        if (currentTrack === previewUrl) {
            // If the same track is clicked again, pause it
            setCurrentTrack(null);
        } else {
            // Otherwise, play the track
            setCurrentTrack(previewUrl);
        }
    };

    return (
        
    );
};

export default Discover;
