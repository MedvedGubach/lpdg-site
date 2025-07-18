
import LazyYouTubeEmbed from "./LazyYoutubeEmbed";

const GuitarTips = () => {
    const videoIds = ['uwzdNcPbAXQ', 'kdjmCowKSmc', '6d_WyxovYzU'];
    return (
        <section className="py-12 max-w-6xl mx-auto border-b-1 border-neutral-400">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

                {videoIds.map((video, index) => (
                    <LazyYouTubeEmbed key={index} videoId={video} />
                ))
                }
            </div>
        </section>)
}

export default GuitarTips;