import { useEffect, useState } from "react";

const Reviews = () => {

    const reviews = [
        { quote: "Butch es un maestro increíble. Aprendí más en 3 meses que en años por mi cuenta.", instagramUrl: "https://www.instagram.com/reel/DKA7RfQNHdX/" },
        { quote: "Sus clases son dinámicas, claras y adaptadas a mi estilo. ¡Lo recomiendo al 100%!", instagramUrl: "https://www.instagram.com/reel/DKA7RfQNHdX/" },
        { quote: "Gracias a él logré tocar mis solos favoritos y mejorar mi técnica.", instagramUrl: "https://www.instagram.com/reel/DKA7RfQNHdX/" },
        { quote: "Butch me ayudó a entender...", instagramUrl: "#" },
        { quote: "Clases personalizadas y divertidas", instagramUrl: "#" },
        { quote: "Gracias a Butch ahora puedo tocar mis rolas favoritas 😎", instagramUrl: "#" },
        
    ];

    const [currentIndex, setCurrentIndex] = useState(0);
    const itemsPerPage = 3;

    useEffect(() => {
        /*    if (window.instgrm) {
               window.instgrm.Embeds.process();
           } */
    }, []);


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
                <div className="flex justify-center gap-6 flex-wrap transition-transform duration-500">
                    {visibleReviews.map((review, index) => (
                        <div key={index} className="bg-neutral-200 w-full sm:w-[300px] rounded-xl p-6 shadow-md">
                            <p className="text-center italic mb-4">"{review.quote}"</p>
                            <div className="text-center font-bold">Video aquí</div>
                        </div>
                    ))}
                </div>

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
            </div>
        </section>
    );
}

export default Reviews