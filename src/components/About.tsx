
import { useEffect, useState } from 'react';
import ButchPlaying from '../assets/images/ButchPlaying.webp';
import ButchPlaying2 from '../assets/images/ButchPlaying2.webp';
import ButchPlaying3 from "../assets/images/ButchPlaying3.webp"
import { motion, AnimatePresence } from 'motion/react';
const About = () => {

    const images = [ButchPlaying, ButchPlaying2, ButchPlaying3];
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
        }, 3000);
        return () => clearInterval(interval);
    }, [images.length]);

    return (
        <section className="py-12 px-1 max-w-6xl mx-auto text-black border-b-1 border-neutral-400">
            <motion.h1
                className="text-3xl font-bold mb-6 text-center"
                viewport={{ once: true }}
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1 }}
            >¿Quién es <span className="text-indigo-600 font-bold">Armando "Butch" García</span>?
            </motion.h1>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <AnimatePresence mode='wait'>
                    <motion.img
                        key={currentIndex}
                        src={images[currentIndex]}
                        width={1080}
                        height={1080}
                        alt="About-Butch"
                        className="rounded-2xl shadow-2xl"
                        viewport={{ once: true }}
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -50 }}
                        transition={{ duration: 0.5, ease: "easeInOut" }}
                    >
                    </motion.img>
                </AnimatePresence>

                <div className="space-y-4">
                    <article className="text-lg space-y-6 font-semibold">
                        <motion.p
                            viewport={{ once: true }}
                            initial={{ opacity: 0, x: 100 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.7, delay: 0.3 }}
                        >
                            Originario de Guadalajara y con más de 25 años como guitarrista en la escena musical ha sido parte de múltiples proyectos como Cadáver, Devourer, B Chaos, DonSr y Janet Camargo, además de colaborar con músicos internacionales como Pro-fe-cía (L.A.). Ha compartido escenario con figuras de alto calibre como Nightwish, In Flames, Abbath, Dave Evans (AC/DC), Courtney Cox y Glenn Hughes, entre muchos otros.
                        </motion.p>
                        <motion.p
                            viewport={{ once: true }}
                            initial={{ opacity: 0, x: 100 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.7, delay: 0.4 }}
                        >
                            Su experiencia no solo se limita al escenario: fue Director General del campus Guadalajara y luego Vicepresidente del Consejo Nacional en Fermatta, una de las universidades más influyentes de música en Latinoamérica, donde trabajó con leyendas como Steve Vai, Marcus Miller, Dom Famularo y Chad Smith.
                        </motion.p>
                        <motion.p
                            viewport={{ once: true }}
                            initial={{ opacity: 0, x: 100 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ duration: 0.7, delay: 0.5 }}
                        >
                            Desde 2014, imparte clases de guitarra centradas en el género musical de la elección del alumno. Su enfoque personalizado permite que cada alumno aprenda a su ritmo, con la música de su agrado, desarrollando técnica, expresión y confianza.
                        </motion.p>
                    </article>
                </div>
            </div>
        </section>
    )
}

export default About