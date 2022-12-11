import React from 'react';
import { Route, Routes } from 'react-router-dom';
import ContactUs from './components/Contact';
import Home from './components/Home';
import NoMatch from './components/NoMatch';
import PhotoGallery from './components/PhotoGallery';
import AboutUs from './components/AboutUs';

export default function Router() {
    return (

        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/gallery" element={<PhotoGallery />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="*" element={<NoMatch />} />
        </Routes>

    );
}
