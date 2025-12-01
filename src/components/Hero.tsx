import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { ZoomParallax } from './ZoomParallax';

import { TextRotate } from './ui/text-rotate';
import './Hero.css';

import showreelVideo from '../assets/images/RONALD MWAROGOS SHOWREEL - ronald mwarogo (720p, h264).webm';
import img2 from '../assets/images/IMG20220221101126.jpg';
import img3 from '../assets/images/IMG20231028150958.jpg';
import img4 from '../assets/images/IMG20231028144732.jpg';
import img5 from '../assets/images/IMG20210625153910.jpg';
import img6 from '../assets/images/20200612_150028.jpg';
import img7 from '../assets/images/IMG20231115114642.jpg';

const Hero = () => {
    const containerRef = useRef(null);

    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ['start start', 'end end'],
    });

    // Text appears when scroll progress is between 70% and 100%
    const textOpacity = useTransform(scrollYProgress, [0.7, 0.85], [0, 1]);
    const textY = useTransform(scrollYProgress, [0.7, 0.85], [50, 0]);

    const images = [
        {
            src: showreelVideo,
            alt: 'Showreel',
            isVideo: true,
        },
        {
            src: img2,
            alt: 'Cinema camera',
        },
        {
            src: img3,
            alt: 'Film set',
        },
        {
            src: img4,
            alt: 'Video production',
        },
        {
            src: img5,
            alt: 'Recording studio',
        },
        {
            src: img6,
            alt: 'Professional camera',
        },
        {
            src: img7,
            alt: 'Film crew',
        },
    ];

    return (
        <div ref={containerRef} id="hero-parallax" style={{ position: 'relative' }}>
            {/* Hero Content Overlay - Appears at the end */}
            <div
                style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '300vh',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    zIndex: 10,
                    pointerEvents: 'none',
                }}
            >
                <div
                    style={{
                        position: 'sticky',
                        top: '50%',
                        transform: 'translateY(-50%)',
                        textAlign: 'center',
                        padding: '0 2rem',
                        maxWidth: '1200px',
                    }}
                >
                    <motion.div
                        style={{
                            opacity: textOpacity,
                            y: textY,
                            marginBottom: '2rem',
                        }}
                    >
                        <TextRotate
                            texts={[
                                "Trust & Reliability",
                                "Obsessive Curiosity",
                                "Making Magic Happen",
                                "Authenticity",
                                "Going Above & Beyond"
                            ]}
                            mainClassName="hero-rotating-text"
                            staggerFrom="last"
                            initial={{ y: "40%", opacity: 0 }}
                            animate={{ y: 0, opacity: 1 }}
                            exit={{ y: "-40%", opacity: 0 }}
                            staggerDuration={0.05}
                            splitLevelClassName="hero-rotating-word"
                            transition={{ type: "spring", damping: 24, stiffness: 260 }}
                            rotationInterval={3000}
                        />
                    </motion.div>

                    <motion.p
                        style={{
                            opacity: textOpacity,
                            y: textY,
                            fontSize: 'clamp(1.1rem, 2vw, 1.5rem)',
                            maxWidth: '800px',
                            margin: '0 auto 3rem',
                            color: 'rgba(255, 255, 255, 0.9)',
                        }}
                    >
                        We inspire <span style={{ color: 'var(--color-primary)', fontWeight: 700 }}>UNORTHODOX</span> and{' '}
                        <span style={{ color: 'var(--color-primary)', fontWeight: 700 }}>AUTHENTIC</span> ways of thinking.
                    </motion.p>
                </div>
            </div>

            {/* Zoom Parallax Effect */}
            <ZoomParallax images={images} />
        </div>
    );
};

export default Hero;
