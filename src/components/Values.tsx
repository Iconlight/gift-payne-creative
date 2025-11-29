import { useState, useEffect, useRef } from 'react';
import { Shield, Lightbulb, Sparkles, Heart, TrendingUp } from 'lucide-react';
import { motion, useScroll, useTransform, useInView } from 'framer-motion';
import './Values.css';
import valuesImage from '../assets/images/IMG_5167.jpg';

export default function ValuesSection() {
    const sectionRef = useRef<HTMLDivElement>(null);
    const isInView = useInView(sectionRef, { once: false, amount: 0.1 });

    const { scrollYProgress } = useScroll({
        target: sectionRef,
        offset: ['start end', 'end start'],
    });

    const y1 = useTransform(scrollYProgress, [0, 1], [0, -50]);
    const y2 = useTransform(scrollYProgress, [0, 1], [0, 50]);

    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2,
                delayChildren: 0.3,
            },
        },
    };

    const itemVariants = {
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: { duration: 0.6, ease: 'easeOut' },
        },
    };

    const values = [
        {
            icon: <Shield className="w-6 h-6" />,
            title: 'Trust & Reliability',
            description:
                'We build lasting relationships through consistent delivery and unwavering commitment to our promises. Your trust is our foundation.',
            position: 'left',
        },
        {
            icon: <Lightbulb className="w-6 h-6" />,
            title: 'Obsessive Curiosity',
            description:
                'We never stop asking questions, exploring possibilities, and pushing creative boundaries to discover innovative solutions.',
            position: 'left',
        },
        {
            icon: <Sparkles className="w-6 h-6" />,
            title: 'Making Magic Happen',
            description:
                'We transform visions into reality through creativity, dedication, and an unwavering belief in the power of storytelling.',
            position: 'right',
        },
        {
            icon: <Heart className="w-6 h-6" />,
            title: 'Authenticity',
            description:
                'We stay true to ourselves and our craft, creating genuine connections and honest narratives that resonate deeply.',
            position: 'right',
        },
        {
            icon: <TrendingUp className="w-6 h-6" />,
            title: 'Going Above & Beyond',
            description:
                'Excellence is our baseline. We consistently exceed expectations, delivering exceptional results that inspire and amaze.',
            position: 'center',
        },
    ];

    return (
        <section ref={sectionRef} className="values-section" id="about">
            {/* Decorative background elements */}
            <motion.div className="values-bg-circle values-bg-circle-1" style={{ y: y1 }} />
            <motion.div className="values-bg-circle values-bg-circle-2" style={{ y: y2 }} />

            <motion.div
                className="values-container"
                initial="hidden"
                animate={isInView ? 'visible' : 'hidden'}
                variants={containerVariants}
            >
                <motion.div className="values-header" variants={itemVariants}>
                    <span className="values-label">OUR CORE VALUES</span>
                    <h2 className="values-title">What Drives Us</h2>
                    <motion.div
                        className="values-underline"
                        initial={{ width: 0 }}
                        animate={{ width: 96 }}
                        transition={{ duration: 1, delay: 0.5 }}
                    />
                </motion.div>

                <motion.p className="values-description" variants={itemVariants}>
                    At Gift Payne Creative, our values shape every project we undertake. They guide our decisions, inspire our
                    creativity, and define who we are as storytellers and creators.
                </motion.p>

                <div className="values-grid">
                    {/* Left Column */}
                    <div className="values-column">
                        {values
                            .filter((value) => value.position === 'left')
                            .map((value, index) => (
                                <ValueItem
                                    key={`left-${index}`}
                                    icon={value.icon}
                                    title={value.title}
                                    description={value.description}
                                    variants={itemVariants}
                                    delay={index * 0.2}
                                    direction="left"
                                />
                            ))}
                    </div>

                    {/* Center Image */}
                    <div className="values-image-container">
                        <motion.div className="values-image-wrapper" variants={itemVariants}>
                            <motion.div
                                className="values-image-inner"
                                initial={{ scale: 0.9, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                transition={{ duration: 0.8, delay: 0.3 }}
                                whileHover={{ scale: 1.03, transition: { duration: 0.3 } }}
                            >
                                <img
                                    src={valuesImage}
                                    alt="Creative Team"
                                    className="values-image"
                                />
                            </motion.div>
                            <motion.div
                                className="values-image-border"
                                initial={{ opacity: 0, scale: 1.1 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ duration: 0.8, delay: 0.6 }}
                            />
                        </motion.div>
                    </div>

                    {/* Right Column */}
                    <div className="values-column">
                        {values
                            .filter((value) => value.position === 'right')
                            .map((value, index) => (
                                <ValueItem
                                    key={`right-${index}`}
                                    icon={value.icon}
                                    title={value.title}
                                    description={value.description}
                                    variants={itemVariants}
                                    delay={index * 0.2}
                                    direction="right"
                                />
                            ))}
                    </div>
                </div>

                {/* Center Value */}
                <div className="values-center">
                    {values
                        .filter((value) => value.position === 'center')
                        .map((value, index) => (
                            <ValueItem
                                key={`center-${index}`}
                                icon={value.icon}
                                title={value.title}
                                description={value.description}
                                variants={itemVariants}
                                delay={0.8}
                                direction="center"
                            />
                        ))}
                </div>
            </motion.div>
        </section>
    );
}

interface ValueItemProps {
    icon: React.ReactNode;
    title: string;
    description: string;
    variants: any;
    delay: number;
    direction: 'left' | 'right' | 'center';
}

function ValueItem({ icon, title, description, variants, delay, direction }: ValueItemProps) {
    return (
        <motion.div
            className={`value-item value-item-${direction}`}
            variants={variants}
            transition={{ delay }}
            whileHover={{ y: -5, transition: { duration: 0.2 } }}
        >
            <motion.div
                className="value-icon-wrapper"
                initial={{ x: direction === 'left' ? -20 : direction === 'right' ? 20 : 0, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.6, delay: delay + 0.2 }}
            >
                <motion.div
                    className="value-icon"
                    whileHover={{ rotate: [0, -10, 10, -5, 0], transition: { duration: 0.5 } }}
                >
                    {icon}
                </motion.div>
                <h3 className="value-title">{title}</h3>
            </motion.div>
            <motion.p
                className="value-description"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: delay + 0.4 }}
            >
                {description}
            </motion.p>
        </motion.div>
    );
}
