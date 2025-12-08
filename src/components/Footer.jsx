import {
    FaLinkedin,
    FaTwitter,
    FaGithub,
    FaEnvelope,
    FaPhone,
    FaMapMarkerAlt,
} from 'react-icons/fa';
import Logo from '../assets/Logo.jpg';
import './Footer.css';

const Footer = () => {
    return (
        <footer className="footer" id="contact">
            <div className="container">
                {/* Footer Main */}
                <div className="footer-main">
                    {/* Company Info */}
                    <div className="footer-section">
                        <div className="footer-logo">
                            <img src={Logo} alt="Cube AI Solutions" />
                            <span className="logo-text">
                                Cube<span className="gradient-text">AI</span> Solutions
                            </span>
                        </div>
                        <p className="footer-description">
                            Transforming businesses with AI-powered solutions and innovative
                            technology.
                        </p>
                        <div className="social-links">
                            <a href="#" className="social-link" aria-label="LinkedIn">
                                <FaLinkedin />
                            </a>
                            <a href="#" className="social-link" aria-label="Twitter">
                                <FaTwitter />
                            </a>
                            <a href="#" className="social-link" aria-label="GitHub">
                                <FaGithub />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="footer-section">
                        <h4>Company</h4>
                        <ul className="footer-links">
                            <li><a href="#home">Home</a></li>
                            <li><a href="#services">Services</a></li>
                            <li><a href="#products">Products</a></li>
                            <li><a href="#about">About Us</a></li>
                        </ul>
                    </div>

                    {/* Services */}
                    <div className="footer-section">
                        <h4>Services</h4>
                        <ul className="footer-links">
                            <li><a href="#services">AI & Machine Learning</a></li>
                            <li><a href="#services">Cloud Solutions</a></li>
                            <li><a href="#services">Data Analytics</a></li>
                            <li><a href="#services">Automation</a></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div className="footer-section">
                        <h4>Contact Us</h4>
                        <ul className="contact-info">
                            <li>
                                <FaEnvelope />
                                <a href="mailto:contact@cubeaisolutions.com">contact@cubeaisolutions.com</a>
                            </li>
                            <li>
                                <FaPhone />
                                <a href="tel:+919486938781">+91 9486938781</a>
                            </li>
                            <li>
                                <FaMapMarkerAlt />
                                <span>KSR Kalvi Nagar, Tiruchengode, Tamil Nadu 637215</span>
                            </li>
                        </ul>
                    </div>
                </div>

                {/* Footer Bottom */}
                <div className="footer-bottom">
                    <p>&copy; {new Date().getFullYear()} CubeAI Solutions. All rights reserved.</p>
                    <div className="footer-links-bottom">
                        <a href="#">Privacy Policy</a>
                        <a href="#">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
