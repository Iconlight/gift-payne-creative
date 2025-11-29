import React from 'react';
import { motion } from 'framer-motion';
import './Director.css';

import directorImage from '../assets/images/Hellen Maina.png';

const Director = () => {
    return (
        <section className="director-section">
            <div className="container director-container">
                <motion.div
                    className="director-image-wrapper"
                    initial={{ opacity: 0, x: -50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <div className="director-backdrop"></div>
                    <img
                        src={directorImage}
                        alt="Hellen Maina - Director"
                        className="director-image"
                    />
                </motion.div>

                <motion.div
                    className="director-content"
                    initial={{ opacity: 0, x: 50 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <span className="director-subtitle">MEET OUR DIRECTOR</span>
                    <h2 className="director-name">HELLEN MAINA</h2>
                    <h3 className="director-role">DIRECTOR</h3>

                    <div className="director-bio">
                        <p>
                            With a keen eye for storytelling and a passion for visual excellence, Hellen leads our creative team
                            in bringing bold visions to life. Her expertise spans across documentaries, commercials, and branded content.
                        </p>
                    </div>

                    <div className="director-signature">Hellen Maina</div>
                </motion.div>
            </div>
        </section>
    );
};

export default Director;
