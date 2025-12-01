import React, { useState, useRef, useEffect } from 'react';
import { motion, useInView, useScroll, useTransform } from 'framer-motion';
import './ServicesGallery.css';

import imgDocumentary from '../assets/images/IMG20210625153910.jpg';
import imgLiveShow from '../assets/images/IMG20231102181252.jpg';
import imgCommercial from '../assets/images/IMG20220128092811.jpg';
import imgMusicVideo from '../assets/images/IMG20210625174528.jpg';
import imgPhotography from '../assets/images/IMG_5713.jpg';
import imgBrand from '../assets/images/IMG20231028150958.jpg';

interface Service {
    title: string;
    subtitle: string;
    description: string;
    image: string;
    color: string;
}

const services: Service[] = [
    {
        title: "DOCUMENTARY FILMMAKING",
        subtitle: "REAL STORIES",
        description: "We delve deep into the heart of the matter, capturing raw emotions and untold stories. Our documentaries are not just films; they are experiences that provoke thought and inspire change.",
        image: imgDocumentary,
        color: "var(--color-primary)"
    },
    {
        title: "LIVE SHOW PRODUCTION",
        subtitle: "BROADCAST QUALITY",
        description: "From multi-camera setups to live streaming, we bring the energy of live events to screens everywhere. We handle the technical complexities so you can focus on the show.",
        image: imgLiveShow,
        color: "var(--color-secondary)"
    },
    {
        title: "COMMERCIAL ADS",
        subtitle: "BRAND IMPACT",
        description: "We create high-octane commercials that cut through the noise. Bold visuals, dynamic editing, and compelling narratives that drive your brand message home.",
        image: imgCommercial,
        color: "var(--color-accent)"
    },
    {
        title: "REALITY SHOWS",
        subtitle: "UNSCRIPTED DRAMA",
        description: "We capture authentic human moments and craft compelling narratives that keep audiences hooked. From concept to post-production, we create reality content that resonates.",
        image: imgMusicVideo,
        color: "var(--color-neon-green)"
    },
    {
        title: "PHOTOGRAPHY",
        subtitle: "CAPTURING MOMENTS",
        description: "From high-fashion shoots to corporate events, our photography captures the essence of the moment with clarity and artistic flair.",
        image: imgPhotography,
        color: "var(--color-primary)"
    },
    {
        title: "BRAND STORYTELLING",
        subtitle: "NARRATIVE POWER",
        description: "We help brands find their voice and tell their story in a way that resonates. Authentic, compelling, and unforgettable.",
        image: imgBrand,
        color: "var(--color-secondary)"
    }
];

interface ServiceSectionProps {
    service: Service;
    index: number;
    setActiveIndex: (index: number) => void;
}

const ServiceSection: React.FC<ServiceSectionProps> = ({ service, index, setActiveIndex }) => {
    const ref = useRef(null);
    const isInView = useInView(ref, { margin: "-50% 0px -50% 0px" });

    useEffect(() => {
        if (isInView) {
            setActiveIndex(index);
        }
    }, [isInView, index, setActiveIndex]);

    return (
        <div ref={ref} className="luxury-service-item">
            <div className="luxury-service-content">
                <span className="luxury-service-subtitle" style={{ color: service.color }}>
                    0{index + 1} — {service.subtitle}
                </span>
                <h3 className="luxury-service-title">{service.title}</h3>
                <p className="luxury-service-description">{service.description}</p>
            </div>
        </div>
    );
};

const MobileParallaxGallery = () => {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start start", "end end"]
    });

    return (
        <div ref={containerRef} className="mobile-parallax-container">
            <div className="mobile-parallax-sticky">
                {services.map((service, index) => {
                    const start = index / services.length;
                    const end = (index + 1) / services.length;

                    const scale = useTransform(
                        scrollYProgress,
                        [start, end],
                        [1, 0.8]
                    );

                    const opacity = useTransform(
                        scrollYProgress,
                        [start, end - 0.1, end],
                        [1, 1, 0]
                    );

                    return (
                        <motion.div
                            key={index}
                            className="mobile-parallax-card"
                            style={{
                                scale,
                                opacity,
                                zIndex: services.length - index,
                            }}
                        >
                            <div className="mobile-parallax-image">
                                <img src={service.image} alt={service.title} />
                            </div>
                            <div className="mobile-parallax-overlay">
                                <div className="mobile-parallax-content">
                                    <span className="mobile-parallax-subtitle" style={{ color: service.color }}>
                                        {service.subtitle}
                                    </span>
                                    <h3 className="mobile-parallax-title">{service.title}</h3>
                                    <p className="mobile-parallax-description">{service.description}</p>
                                </div>
                            </div>
                        </motion.div>
                    );
                })}
            </div>
        </div>
    );
};

const ServicesGallery = () => {
    const [activeIndex, setActiveIndex] = useState(0);

    return (
        <section className="services-gallery-wrapper" id="services">
            {/* Desktop Layout - Calm & Luxurious */}
            <div className="services-desktop-view">
                <div className="services-luxury-header">
                    <span className="services-luxury-label">OUR EXPERTISE</span>
                    <h2 className="services-luxury-heading">WHAT WE DO</h2>
                </div>

                <div className="services-luxury-container">
                    <div className="services-luxury-list">
                        {services.map((service, index) => (
                            <ServiceSection
                                key={index}
                                service={service}
                                index={index}
                                setActiveIndex={setActiveIndex}
                            />
                        ))}
                    </div>

                    <div className="services-luxury-images">
                        {services.map((service, index) => (
                            <motion.div
                                key={index}
                                className="luxury-image-wrapper"
                                initial={{ opacity: 0 }}
                                animate={{ opacity: activeIndex === index ? 1 : 0 }}
                                transition={{ duration: 0.7, ease: "easeInOut" }}
                            >
                                <img src={service.image} alt={service.title} />
                                <div className="luxury-image-overlay" />
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Mobile Layout - Parallax Stack */}
            <div className="services-mobile-view">
                <div className="services-luxury-header">
                    <span className="services-luxury-label">OUR EXPERTISE</span>
                    <h2 className="services-luxury-heading">WHAT WE DO</h2>
                </div>
                <MobileParallaxGallery />
            </div>
        </section>
    );
};

export default ServicesGallery;
