import { useEffect } from "react";

const Reviews = () => {

    useEffect(() => {
        if (window.instgrm) {
            window.instgrm.Embeds.process();
        }
    }, []);


    const reviews = [
        {
            quote: "Butch es un maestro increíble. Aprendí más en 3 meses que en años por mi cuenta.",
            instagramUrl: "https://www.instagram.com/reel/DKA7RfQNHdX/"
        },
        {
            quote: "Sus clases son dinámicas, claras y adaptadas a mi estilo. ¡Lo recomiendo al 100%!",
            instagramUrl: "https://www.instagram.com/reel/DKA7RfQNHdX/"
        },
        {
            quote: "Gracias a él logré tocar mis solos favoritos y mejorar mi técnica.",
            instagramUrl: "https://www.instagram.com/reel/DKA7RfQNHdX/"
        }
    ];

    return (
        <section id="reviews" className="text-black py-12 border-b-1 border-neutral-400">
            <h1 className="text-3xl text-indigo-600 font-bold text-center mb-10">Testimonios</h1>
            <div className="flex flex-col md:flex-row gap-6 justify-center ">
                {reviews.map((review, i) => (
                    <div key={i} className="bg-neutral-200 max-w-sm rounded-xl p-7">
                        <p className="text-center italic mb-4">"{review.quote} + nombre del alumno + video"</p>

                        <blockquote
                            className="instagram-media"
                            data-instgrm-permalink={review.instagramUrl}
                            data-instgrm-version="14"
                            style={{ background: '#fff', border: 0, margin: '0 auto', maxWidth: '540px' }}
                        ></blockquote>
                    </div>
                ))}
            </div>
        </section>
    );
}

export default Reviews