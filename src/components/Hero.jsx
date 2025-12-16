import { motion } from 'framer-motion';
import { FaArrowRight, FaCheckCircle } from 'react-icons/fa';
import heroImage from '../assets/ai-searching.jpg';
import './Hero.css';

const Hero = () => {
    const features = [
        'AI-Powered Solutions',
        'Enterprise-Grade Security',
        '24/7 Support',
    ];

    return (
        <section className="hero" id="home">
            <div className="container">
                <div className="hero-grid">
                    {/* Left Content */}
                    <div className="hero-content">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.6 }}
                        >
                            <div className="hero-badge">
                                <span>Leading AI Solutions Provider</span>
                            </div>

                            <h1 className="hero-title">
                                Transform Your Business with{' '}
                                <span className="gradient-text">AI Solutions</span>
                            </h1>

                            <p className="hero-description">
                                Empowering enterprises with cutting-edge artificial intelligence and
                                service-based solutions that drive growth, efficiency, and innovation.
                            </p>

                            {/* Features List */}
                            <div className="hero-features">
                                {features.map((feature) => (
                                    <div key={feature} className="feature-item">
                                        <FaCheckCircle className="feature-icon" />
                                        <span>{feature}</span>
                                    </div>
                                ))}
                            </div>

                            {/* CTA Buttons */}
                            <div className="hero-buttons">
                                <button className="btn btn-primary btn-lg">
                                    Get Started
                                    <FaArrowRight />
                                </button>
                                <button className="btn btn-secondary btn-lg">
                                    Learn More
                                </button>
                            </div>

                            {/* Stats */}
                            <div className="hero-stats">
                                <div className="stat">
                                    <h3>500+</h3>
                                    <p>Projects</p>
                                </div>
                                <div className="stat">
                                    <h3>98%</h3>
                                    <p>Satisfaction</p>
                                </div>
                                <div className="stat">
                                    <h3>50+</h3>
                                    <p>AI Experts</p>
                                </div>
                            </div>
                        </motion.div>
                    </div>

                    {/* Right Image */}
                    <motion.div
                        className="hero-image"
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.6, delay: 0.2 }}
                    >
                        <div className="image-wrapper">
                            <img src={heroImage} alt="AI Solutions" />
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
};

export default Hero;
