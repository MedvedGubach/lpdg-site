
import ButchPlaying from '../assets/images/ButchPlaying.jpg'
const About = () => {
    return (
        <section className="py-16 px-1 max-w-6xl mx-auto text-black border-b-1 border-neutral-400">
            <h1 className="text-3xl font-semibold mb-6 text-center">¿Quién es <span className="text-indigo-600 font-bold">Armando "Butch" García</span>?</h1>
            <div className="grid md:grid-cols-2 gap-12 items-center">
                <img src={ButchPlaying} alt="About-Butch" className="rounded-2xl" />

                <div className="space-y-4">
                    <article className="text-2xl space-y-12">
                        <p>
                            Con más de 15 años de experiencia como guitarrista, Butch ha tocado en escenarios
                            nacionales e internacionales, fusionando el poder del metal con la elegancia del blues y
                            la sensibilidad acústica.
                        </p>
                        <p>
                            Su enfoque personalizado permite que cada alumno aprenda a su ritmo, con la música de su elección,
                            desarrollando técnica, expresión y confianza.
                        </p>
                    </article>
                </div>
            </div>
        </section>
    )
}

export default About