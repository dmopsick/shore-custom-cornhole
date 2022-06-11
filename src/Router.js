import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import NoMatch from './components/NoMatch';
import Gallery from './components/Gallery';

export default function Router() {
    return (

        <Routes>
            <Route path="/" element={<Home/>} />
            <Route path ="/gallery" element={<Gallery/>} />
            <Route path="*" element={<NoMatch />} />
        </Routes>

    );
}
