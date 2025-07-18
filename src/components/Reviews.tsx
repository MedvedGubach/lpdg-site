import { useState } from "react";
import ReviewVideo1 from '../assets/videos/ReviewVideo1.webm'
import ReviewVideo2 from '../assets/videos/ReviewVideo2.webm'
import ReviewVideo3 from '../assets/videos/ReviewVideo3.webm'
import ReviewVideo4 from '../assets/videos/ReviewVideo4.webm'
import ReviewVideo5 from '../assets/videos/ReviewVideo5.webm'
import ReviewVideo6 from '../assets/videos/ReviewVideo6.webm'
import ReviewVideo7 from '../assets/videos/ReviewVideo7.webm'

import { motion, AnimatePresence } from "motion/react";

const Reviews = () => {

    const reviews = [
        { quote: "Butch es un maestro increíble. Aprendí más en 3 meses que en años por mi cuenta.", video: ReviewVideo1 },
        { quote: "Sus clases son dinámicas, claras y adaptadas a mi estilo. ¡Lo recomiendo al 100%!", video: ReviewVideo2 },
        { quote: "Gracias a él logré tocar mis solos favoritos y mejorar mi técnica.", video: ReviewVideo3 },
        { quote: "Butch me ayudó a entender...", video: ReviewVideo4 },
        { quote: "Clases personalizadas y divertidas", video: ReviewVideo5 },
        { quote: "Gracias a Butch ahora puedo tocar mis rolas favoritas 😎", video: ReviewVideo6 },
        { quote: "Simplemente el mejor profesor de guitarra en Guadalajara y México", video: ReviewVideo7 },

    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const itemsPerPage = 3;

    const handlePrev = () => {
        setCurrentIndex((prevIndex) => Math.max(0, prevIndex - 1));
    };

    const handleNext = () => {
        const maxIndex = Math.ceil(reviews.length / itemsPerPage) - 1;
        setCurrentIndex((prevIndex) => Math.min(maxIndex, prevIndex + 1));
    };

    const start = currentIndex * itemsPerPage;
    const visibleReviews = reviews.slice(start, start + itemsPerPage);

    return (
        <section className="text-black py-12 border-b border-neutral-400 px-4">
            <h1 className="text-3xl text-indigo-600 font-bold text-center mb-10">Lo que dicen los alumnos</h1>

            {/* Slider */}
            <div className="relative">
                <AnimatePresence mode="wait">
                    <motion.div
                        className="flex justify-center gap-6 flex-wrap"
                        key={currentIndex}
                        initial={{ opacity: 0, scale: 0.8 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.8 }}
                        transition={{ duration: 0.5, ease: "easeOut" }}
                    >
                        {visibleReviews.map((review, index) => (
                            <div key={index} className="bg-neutral-200 w-full sm:w-[300px] rounded-xl p-6 shadow-md">
                                <p className="text-center italic mb-4">"{review.quote}"</p>
                                <video className="" controls={true} autoPlay={false} src={review.video} />
                            </div>
                        ))}

                    </motion.div>
                </AnimatePresence>

                {/* Controls */}
                <div className="flex justify-center mt-8 gap-4">
                    <button
                        onClick={handlePrev}
                        className="bg-indigo-600 text-white px-4 py-2  disabled:opacity-50 hover:bg-indigo-800 font-semibold rounded-full shadow-lg transition-all duration-300 hover:scale-105 focus:outline-none focus:ring- focus:ring-indigo-400"
                        disabled={currentIndex === 0}
                    >
                        ← Anterior
                    </button>
                    <button
                        onClick={handleNext}
                        className="bg-indigo-600 text-white px-4 py-2 disabled:opacity-50 hover:bg-indigo-800 font-semibold rounded-full shadow-lg transition-all duration-300 hover:scale-105 focus:outline-none focus:ring- focus:ring-indigo-400"
                        disabled={start + itemsPerPage >= reviews.length}
                    >
                        Siguiente →
                    </button>
                </div>

                <div className="flex justify-center mt-6 space-x-4">
                    {Array.from({ length: Math.ceil(reviews.length / itemsPerPage) }).map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentIndex(index)}
                            className={`w-3 h-3 rounded-full ${currentIndex === index ? 'bg-indigo-600' : 'bg-gray-300'} transition-all`}
                            aria-label="review-bullets"
                        />
                    ))}
                </div>
            </div>
        </section>
    );
}

export default Reviews