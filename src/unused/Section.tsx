import React from 'react';
import { motion } from 'framer-motion';
import './Section.css';

interface SectionProps {
    title: string;
    subtitle: string;
    description: string;
    image: string;
    reversed?: boolean;
    color?: string;
}

const Section: React.FC<SectionProps> = ({ title, subtitle, description, image, reversed = false, color = 'var(--color-primary)' }) => {
    return (
        <section className={`content-section ${reversed ? 'reversed' : ''}`}>
            <div className="container section-container">
                <motion.div
                    className="section-content"
                    initial={{ opacity: 0, x: reversed ? 50 : -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <span className="section-subtitle" style={{ color }}>{subtitle}</span>
                    <h2 className="section-heading">{title}</h2>
                    <p className="section-description">{description}</p>
                    <button className="section-btn" style={{ borderColor: color, color: color }}>LEARN MORE</button>
                </motion.div>

                <motion.div
                    className="section-image-wrapper"
                    initial={{ opacity: 0, x: reversed ? -50 : 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="image-backdrop" style={{ background: color }}></div>
                    <img src={image} alt={title} className="section-image" />
                </motion.div>
            </div>
        </section>
    );
};

export default Section;
