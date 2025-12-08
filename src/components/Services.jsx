import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import {
    FaBrain,
    FaCloud,
    FaChartLine,
    FaRobot,
    FaDatabase,
    FaCog,
} from 'react-icons/fa';
import './Services.css';

const Services = () => {
    const [ref, inView] = useInView({
        triggerOnce: true,
        threshold: 0.1,
    });

    const services = [
        {
            icon: <FaBrain />,
            title: 'AI & Machine Learning',
            description:
                'Advanced AI solutions that automate processes and drive intelligent decision-making.',
        },
        {
            icon: <FaCloud />,
            title: 'Cloud Solutions',
            description:
                'Scalable cloud infrastructure designed for modern business needs and growth.',
        },
        {
            icon: <FaChartLine />,
            title: 'Data Analytics',
            description:
                'Transform data into actionable insights with powerful analytics and visualization.',
        },
        {
            icon: <FaRobot />,
            title: 'Process Automation',
            description:
                'Streamline operations with intelligent automation that boosts efficiency.',
        },
        {
            icon: <FaDatabase />,
            title: 'Data Engineering',
            description:
                'Robust data pipelines and architectures for enterprise-grade solutions.',
        },
        {
            icon: <FaCog />,
            title: 'Custom Development',
            description:
                'Tailored software solutions built to meet your unique business requirements.',
        },
    ];

    return (
        <section className="section services" id="services" ref={ref}>
            <div className="container">
                {/* Section Header */}
                <div className="section-header">
                    <div className="section-badge">Our Services</div>
                    <h2 className="section-title">
                        Comprehensive <span className="gradient-text">AI Solutions</span>
                    </h2>
                    <p className="section-description">
                        We deliver cutting-edge technology solutions that transform businesses
                        and drive sustainable growth.
                    </p>
                </div>

                {/* Services Grid */}
                <div className="services-grid grid grid-3">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.title}
                            className="service-card card"
                            initial={{ opacity: 0, y: 30 }}
                            animate={inView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                        >
                            <div className="service-icon">{service.icon}</div>
                            <h3 className="service-title">{service.title}</h3>
                            <p className="service-description">{service.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
