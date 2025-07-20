import LazyYouTubeEmbed from "./LazyYoutubeEmbed";

const Collabs = () => {
    return (
        <section className="py-12 max-w-6xl mx-auto border-b border-neutral-400 px-4">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                    { id: "pG_Tfq7ZczA", text: "Butch ha participado en el Hell & Heaven Open Air 2022", },
                    { id: "7HtKGyw-ZAM", text: "Es el guitarrista de la banda de groove metal B-Chaos", },
                ].map((collab, index) => (
                    <div
                        key={index}
                        className="bg-neutral-100 rounded-2xl shadow-lg border border-neutral-700 hover:scale-[1.02] transition-transform duration-300 overflow-hidden"
                    >
                        <div className="aspect-video">
                            <LazyYouTubeEmbed videoId={collab.id} />
                        </div>
                        <div className="p-4">
                            <p className="text-indigo-600 text-sm font-semibold">{collab.text}</p>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Collabs;
