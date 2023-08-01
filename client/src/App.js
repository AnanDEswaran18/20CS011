import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import TrainDisplay from './components/TrainDisplay';

import './App.css';
const App = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/trains" element={<TrainDisplay/>}/>
            </Routes>
        </Router>
    );
};

export default App;
