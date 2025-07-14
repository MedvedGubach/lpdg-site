const Hero = () => {
    return (
        <section className="flex flex-col py-24 justify-center items-center text-center px-4 border-b border-neutral-400 bg-white">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center max-w-6xl mx-auto">
                <div className="space-y-6">
                    <h1 className="text-4xl md:text-6xl font-bold">Lecciones Practicas de Guitarra con <span className="text-indigo-600">Butch García</span></h1>

                    <p className="text-lg text-neutral-700">
                        Clases 100% prácticas con <strong>Butch García</strong>, músico con más de 15 años de experiencia.
                        Tú eliges el estilo, el ritmo y las canciones. Desde cero o para mejorar tu técnica.
                        Aprende guitarra <span className="text-indigo-600 font-semibold">tocando la música que amas</span>

                    </p>

                    <div className="flex justify-center md:justify-start gap-4">
                        <a
                            href="https://wa.me/523310882137?text=Hola%20Butch!%20Quiero%20tomar%20clases%20de%20guitarra"
                            className="bg-indigo-600 hover:bg-indigo-700 text-white py-3 px-6 rounded-lg shadow-lg transition-all duration-200"
                        >
                            ¡Agendar clase ahora!
                        </a>
                        <a
                            href="#reviews"
                            className="text-indigo-600 font-semibold underline underline-offset-4 hover:text-indigo-800"
                        >
                            Ver testimonios
                        </a>
                    </div>
                </div>

                <div className="aspect-video">
                    <iframe
                        className="w-full h-full rounded-xl shadow-lg"
                        src="https://www.youtube.com/embed/no11a22mb38"
                        title="Intro LPDG"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        allowFullScreen
                    />
                </div>
            </div>
        </section>
    );
};

export default Hero;
