import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Logo from '../assets/Logo.jpg';
import './Navbar.css';

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const navLinks = [
        { name: 'Home', href: '#home' },
        { name: 'Product', href: '#products' },
        { name: 'Services', href: '#services' },
        { name: 'About', href: '#about' },
        { name: 'Contact', href: '#contact' },
    ];

    return (
        <nav className={`navbar ${isScrolled ? 'scrolled' : ''}`}>
            <div className="container">
                <div className="navbar-content">
                    {/* Logo */}
                    <a href="#home" className="navbar-logo">
                        <img src={Logo} alt="Cube AI Solutions" />
                        <span className="logo-text">
                            Cube<span className="gradient-text">AI</span> Solutions
                        </span>
                    </a>

                    {/* Navigation Links */}
                    <div className="nav-links">
                        {navLinks.map((link) => (
                            <a key={link.name} href={link.href} className="nav-link">
                                {link.name}
                            </a>
                        ))}
                    </div>

                    {/* CTA Button */}
                    <button className="btn btn-primary">
                        Get Started
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
