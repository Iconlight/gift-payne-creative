import { useScroll, useTransform, motion } from 'framer-motion';
import { useRef } from 'react';

interface Image {
    src: string;
    alt?: string;
    isVideo?: boolean;
}

interface ZoomParallaxProps {
    images: Image[];
}

export function ZoomParallax({ images }: ZoomParallaxProps) {
    const container = useRef(null);
    const { scrollYProgress } = useScroll({
        target: container,
        offset: ['start start', 'end end'],
    });

    const scale4 = useTransform(scrollYProgress, [0, 1], [1, 4]);
    const scale5 = useTransform(scrollYProgress, [0, 1], [1, 5]);
    const scale6 = useTransform(scrollYProgress, [0, 1], [1, 6]);
    const scale8 = useTransform(scrollYProgress, [0, 1], [1, 8]);
    const scale9 = useTransform(scrollYProgress, [0, 1], [1, 9]);

    const scales = [scale4, scale5, scale6, scale5, scale6, scale8, scale9];

    return (
        <div ref={container} style={{ position: 'relative', height: '300vh' }}>
            <div style={{ position: 'sticky', top: 0, height: '100vh', overflow: 'hidden' }}>
                {images.map(({ src, alt, isVideo }, index) => {
                    const scale = scales[index % scales.length];

                    const getPositionStyles = (idx: number) => {
                        const positions: { [key: number]: React.CSSProperties } = {
                            1: { top: '-30vh', left: '5vw', height: '30vh', width: '35vw' },
                            2: { top: '-10vh', left: '-25vw', height: '45vh', width: '20vw' },
                            3: { top: '0', left: '27.5vw', height: '25vh', width: '25vw' },
                            4: { top: '27.5vh', left: '5vw', height: '25vh', width: '20vw' },
                            5: { top: '27.5vh', left: '-22.5vw', height: '25vh', width: '30vw' },
                            6: { top: '22.5vh', left: '25vw', height: '15vh', width: '15vw' },
                        };
                        return positions[idx] || {};
                    };

                    return (
                        <motion.div
                            key={index}
                            style={{
                                scale,
                                position: 'absolute',
                                top: 0,
                                left: 0,
                                width: '100%',
                                height: '100%',
                                display: 'flex',
                                alignItems: 'center',
                                justifyContent: 'center',
                            }}
                        >
                            <div
                                style={{
                                    position: 'relative',
                                    height: '25vh',
                                    width: '25vw',
                                    ...getPositionStyles(index),
                                }}
                            >
                                {isVideo ? (
                                    <video
                                        src={src}
                                        autoPlay
                                        loop
                                        muted
                                        playsInline
                                        style={{
                                            width: '100%',
                                            height: '100%',
                                            objectFit: 'cover',
                                        }}
                                    />
                                ) : (
                                    <img
                                        src={src || '/placeholder.svg'}
                                        alt={alt || `Parallax image ${index + 1}`}
                                        style={{
                                            width: '100%',
                                            height: '100%',
                                            objectFit: 'cover',
                                        }}
                                    />
                                )}
                            </div>
                        </motion.div>
                    );
                })}
            </div>
        </div>
    );
}
