
const Hero = () => {
    return (
        <section className="flex flex-col py-24 justify-center items-center text-center px-4 border-b-1 border-neutral-400">
            <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="">
                    <h1 className="text-4xl md:text-6xl font-bold">Lecciones Practicas de Guitarra con <span className="text-indigo-600">Butch García</span></h1>
                    <p className="text-md">Domina la guitarra eléctrica o acústica con musica de tu elección con lecciones 100% practicas</p>
                    <button className="bg-amber-700 hover:bg-amber-800 text-white font-bold hover:cursor-pointer">Agendar Clase</button>
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
    )
}

export default Hero