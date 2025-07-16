import { FaGuitar, FaUserGraduate, FaMusic, FaChalkboardTeacher } from 'react-icons/fa';
const WhyLearnWMe = () => {
    return (
        <section className="text-center py-12 border-b border-neutral-400 px-4 max-w-4xl mx-auto">
            <h1 className="text-3xl font-bold text-indigo-600 mb-4">¿Por qué aprender conmigo?</h1>
            <p className="text-xl mb-6">
                Descubre un enfoque diferente, pensado para que disfrutes y avances desde el primer día.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 place-items-center mt-8 md:mt-0">
                <div className="">
                    <ul className="text-left space-y-4 text-lg list-disc list-inside">
                        <li>
                            🎸 <strong>100% práctico:</strong> desde la primera clase tocas tu guitarra, sin rodeos ni teoría pesada.
                        </li>
                        <li>
                            🎵 <strong>Aprende con la música que amas:</strong> tú eliges las canciones, estilos o artistas que te inspiran.
                        </li>
                        <li>
                            🧠 <strong>Sin presión ni estrés:</strong> avanzas a tu ritmo, con clases dinámicas y adaptadas a tu nivel.
                        </li>
                        <li>
                            👨‍🏫 <strong>Más de 15 años enseñando:</strong> he trabajado con principiantes, niños, adultos y músicos avanzados.
                        </li>
                        <li>
                            🚀 <strong>Resultados reales:</strong> cada clase tiene un objetivo claro y aplicable.
                        </li>
                    </ul>

                </div>

                <div className="grid grid-cols-2 gap-3">
                    <div className="bg-neutral-100 rounded-xl p-6 shadow-md hover:shadow-lg transition-all text-center flex flex-col items-center">
                        <FaChalkboardTeacher className="text-4xl text-indigo-600 mb-2" />
                        <p className="text-3xl font-bold text-indigo-700">+10</p>
                        <p className="text-gray-700 text-sm whitespace-nowrap">años enseñando guitarra</p>
                    </div>
                    <div className="bg-neutral-100 rounded-xl p-6 shadow-md hover:shadow-lg transition-all text-center flex flex-col items-center">
                        <FaUserGraduate className="text-4xl text-indigo-600 mb-2" />
                        <p className="text-3xl font-bold text-indigo-700">+150</p>
                        <p className="text-gray-700 text-sm whitespace-nowrap">alumnos satisfechos</p>
                    </div>
                    <div className="bg-neutral-100 rounded-xl p-6 shadow-md hover:shadow-lg transition-all text-center flex flex-col items-center">
                        <FaMusic className="text-4xl text-indigo-600 mb-2" />
                        <p className="text-3xl font-bold text-indigo-700">+25</p>
                        <p className="text-gray-700 text-sm whitespace-nowrap">años en la escena musical</p>
                    </div>
                    <div className="bg-neutral-100 rounded-xl p-6 shadow-md hover:shadow-lg transition-all text-center flex flex-col items-center">
                        <FaGuitar className="text-4xl text-indigo-600 mb-2" />
                        <p className="text-3xl font-bold text-indigo-700">1,000+</p>
                        <p className="text-gray-700 text-sm whitespace-nowrap">clases impartidas</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default WhyLearnWMe