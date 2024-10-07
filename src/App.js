import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import GitHubProfileFinder from './components/GitHubProfileFinder';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Weather from './Weather/Weather';

function App() {
    return (
        <Router>
            <div className="App">
                <Navbar/>
                <Routes>
                    <Route path="/" element={<GitHubProfileFinder />} />
                    <Route path="/Weather" element={<Weather/> } />
                </Routes>
            </div>
        </Router>
        
    );
}

export default App;



