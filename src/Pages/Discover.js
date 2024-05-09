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
         
