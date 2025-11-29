import React, { useState, useEffect } from 'react';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import logo from '../assets/images/logo.png';
import './Navbar.css';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const [visible, setVisible] = useState(false);

    useEffect(() => {
        let ticking = false;

        const handleScroll = () => {
            if (!ticking) {
                window.requestAnimationFrame(() => {
                    const showThreshold = 100;
                    setScrolled(window.scrollY > 50);
                    setVisible(window.scrollY > showThreshold);
                    ticking = false;
                });
                ticking = true;
            }
        };

        handleScroll(); // Check on mount
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <nav className={`navbar ${scrolled ? 'scrolled' : ''} ${!visible ? 'hidden' : ''}`}>
            <div className="navbar-container">
                <div className="logo">
                    <a href="#"><img src={logo} alt="Gift Payne" className="logo-image" /></a>
                </div>

                <div className="desktop-menu">
                    <a href="#services">Services</a>
                    <a href="#portfolio">Portfolio</a>
                    <a href="#about">About</a>
                    <a href="#contact">Contact</a>
                    <button className="cta-button">LET'S TALK</button>
                </div>

                <div className="mobile-menu-toggle" onClick={() => setIsOpen(!isOpen)}>
                    {isOpen ? <X size={24} /> : <Menu size={24} />}
                </div>
            </div>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        className="mobile-menu"
                        initial={{ opacity: 0, y: -20 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -20 }}
                    >
                        <a href="#services" onClick={() => setIsOpen(false)}>Services</a>
                        <a href="#portfolio" onClick={() => setIsOpen(false)}>Portfolio</a>
                        <a href="#about" onClick={() => setIsOpen(false)}>About</a>
                        <a href="#contact" onClick={() => setIsOpen(false)}>Contact</a>
                        <button className="cta-button mobile" onClick={() => setIsOpen(false)}>LET'S TALK</button>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
