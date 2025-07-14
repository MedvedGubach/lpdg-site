
const Gallery = () => {
    return (
        <section className="py-12 max-w-6xl mx-auto border-b-1 border-neutral-400">
            <h2 className="text-3xl text-indigo-600 font-semibold text-center mb-10">Butch en Acción</h2>
            <div className="grid md:grid-cols-3 gap-6">
                {["https://www.youtube.com/embed/7HtKGyw-ZAM", "https://www.youtube.com/embed/kdjmCowKSmc", "https://www.youtube.com/embed/6d_WyxovYzU"].map((url, i) => (
                    <div key={i} className="aspect-video">
                        <iframe
                            className="w-full h-full rounded-xl shadow-lg"
                            src={url}
                            title={`Video ${i + 1}`}
                            frameBorder="0"
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                            allowFullScreen
                        />
                    </div>
                ))}
            </div>
        </section>
    )
}

export default Gallery