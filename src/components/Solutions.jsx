import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
    FaCheckCircle,
    FaLightbulb,
    FaShieldAlt,
    FaUsers,
} from 'react-icons/fa';
import teamImage from '../assets/Image 2.jpg';
import './Solutions.css';

const Solutions = () => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    const features = [
        {
            icon: <FaLightbulb />,
            title: 'Innovation First',
            description: 'Cutting-edge solutions that keep you ahead',
        },
        {
            icon: <FaShieldAlt />,
            title: 'Enterprise Security',
            description: 'Bank-level security for your data',
        },
        {
            icon: <FaUsers />,
            title: 'Expert Team',
            description: 'Dedicated specialists for your success',
        },
        {
            icon: <FaCheckCircle />,
            title: '24/7 Support',
            description: 'Round-the-clock assistance when needed',
        },
    ];

    return (
        <section className="section solutions" id="products" ref={ref}>
            <div className="container">
                {/* Section Header */}
                <div className="section-header">
                    <div className="section-badge">Why Choose Us</div>
                    <h2 className="section-title">
                        Built for <span className="gradient-text">Excellence</span>
                    </h2>
                    <p className="section-description">
                        We combine technical expertise with business acumen to deliver
                        measurable results.
                    </p>
                </div>

                {/* Features Grid */}
                <div className="features-grid grid grid-4">
                    {features.map((feature, index) => (
                        <motion.div
                            key={feature.title}
                            className="feature-card"
                            initial={{ opacity: 0, y: 30 }}
                            animate={inView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <div className="feature-icon">{feature.icon}</div>
                            <h4>{feature.title}</h4>
                            <p>{feature.description}</p>
                        </motion.div>
                    ))}
                </div>

                {/* CTA Section */}
                <motion.div
                    className="solutions-cta"
                    initial={{ opacity: 0, y: 30 }}
                    animate={inView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6, delay: 0.5 }}
                >
                    <div className="cta-content">
                        <div className="cta-text">
                            <h3>Ready to Transform Your Business?</h3>
                            <p>Let's discuss how we can help you achieve your goals.</p>
                        </div>
                        <button className="btn btn-primary btn-lg">
                            Schedule a Consultation
                        </button>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Solutions;
