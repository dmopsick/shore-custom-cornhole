import React from 'react';
import { Route, Routes } from 'react-router-dom';
import ContactUs from './components/Contact';
import Home from './components/Home';
import NoMatch from './components/NoMatch';
import PhotoGallery from './components/PhotoGallery';
import AboutUs from './components/AboutUs';
import Order from './components/Order';

export default function Router() {
    return (

        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<AboutUs />} />
            <Route path="/gallery" element={<PhotoGallery />} />
            <Route path="/order" element={<Order />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="*" element={<NoMatch />} />
        </Routes>

    );
}
