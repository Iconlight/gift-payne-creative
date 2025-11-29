import React from 'react';
import { Film, Mic, Tv, Camera, Video, MessageSquare } from 'lucide-react';
import { motion } from 'framer-motion';
import './Services.css';

const services = [
    {
        icon: <Film size={40} />,
        title: 'Documentary Filmmaking',
        description: 'Capturing real stories with cinematic excellence and authentic narratives.'
    },
    {
        icon: <Tv size={40} />,
        title: 'Live Show Production',
        description: 'Engaging multi-camera productions for broadcast and streaming.'
    },
    {
        icon: <Video size={40} />,
        title: 'Commercial Ads',
        description: 'High-impact commercials that drive brand awareness and sales.'
    },
    {
        icon: <Mic size={40} />,
        title: 'Music Videos',
        description: 'Visualizing sound with creative and artistic direction.'
    },
    {
        icon: <Camera size={40} />,
        title: 'Photography',
        description: 'Professional photography for brands, events, and portraits.'
    },
    {
        icon: <MessageSquare size={40} />,
        title: 'Brand Storytelling',
        description: 'Crafting compelling narratives that resonate with your audience.'
    }
];

const Services = () => {
    return (
        <section className="services" id="services">
            <div className="container">
                <motion.h2
                    className="section-title"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    OUR <span className="highlight">EXPERTISE</span>
                </motion.h2>

                <div className="services-grid">
                    {services.map((service, index) => (
                        <motion.div
                            key={index}
                            className="service-card"
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <div className="service-icon">{service.icon}</div>
                            <h3>{service.title}</h3>
                            <p>{service.description}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Services;
