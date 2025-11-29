import React from 'react';
import { motion } from 'framer-motion';
import './Testimonials.css';

const testimonials = [
    {
        name: 'Sarah Jenkins',
        role: 'Marketing Director, TechFlow',
        image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1887&auto=format&fit=crop',
        quote: "Gift Payne Creative didn't just make a video; they crafted an identity for our brand that we didn't know we had."
    },
    {
        name: 'Marcus Thorne',
        role: 'CEO, Thorne Media',
        image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1887&auto=format&fit=crop',
        quote: "Unapologetically bold and professional. The team understood our vision immediately and elevated it."
    },
    {
        name: 'Elena Rodriguez',
        role: 'Founder, ArtSpace',
        image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=1888&auto=format&fit=crop',
        quote: "Their storytelling capability is unmatched. They turned our simple event into a cinematic experience."
    }
];

const Testimonials = () => {
    return (
        <section className="testimonials">
            <div className="container">
                <motion.h2
                    className="section-title"
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                >
                    CLIENT <span className="highlight-alt">STORIES</span>
                </motion.h2>

                <div className="testimonials-grid">
                    {testimonials.map((item, index) => (
                        <motion.div
                            key={index}
                            className="testimonial-card"
                            initial={{ opacity: 0, scale: 0.9 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <div className="quote-icon">"</div>
                            <p className="quote-text">{item.quote}</p>
                            <div className="testimonial-author">
                                <img src={item.image} alt={item.name} />
                                <div>
                                    <h4>{item.name}</h4>
                                    <span>{item.role}</span>
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
