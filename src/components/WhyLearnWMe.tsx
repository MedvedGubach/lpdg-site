import { FaGuitar, FaUserGraduate, FaMusic, FaChalkboardTeacher } from 'react-icons/fa';
import { motion } from 'motion/react';

const WhyLearnWMe = () => {
    return (
        <section className="text-center py-12 border-b border-neutral-400 px-4 max-w-4xl mx-auto">
            <motion.div
                viewport={{ once: true }}
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
            >
                <h1 className="text-3xl font-bold text-indigo-600 mb-4">¿Por qué aprender conmigo?</h1>
                <p className="text-xl mb-6">
                    Descubre un enfoque diferente, pensado para que disfrutes y avances desde el primer día.
                </p>
            </motion.div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 place-items-center mt-8 md:mt-0">
                <ul className="text-left space-y-4 text-lg list-disc list-inside">
                    <motion.li
                        viewport={{ once: true }}
                        initial={{ opacity: 0, x: -100 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.7, delay: 0.3 }}
                    >
                        🎸 <strong>100% práctico:</strong> desde la primera clase tocas tu guitarra, sin rodeos ni teoría pesada.
                    </motion.li>
                    <motion.li
                        viewport={{ once: true }}
                        initial={{ opacity: 0, x: -100 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.7, delay: 0.4 }}
                    >
                        🎵 <strong>Aprende con la música que amas:</strong> tú eliges las canciones, estilos o artistas que te inspiran.
                    </motion.li>
                    <motion.li
                        viewport={{ once: true }}
                        initial={{ opacity: 0, x: -100 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.7, delay: 0.5 }}
                    >
                        🧠 <strong>Sin presión ni estrés:</strong> avanzas a tu ritmo, con clases dinámicas y adaptadas a tu nivel.
                    </motion.li>
                    <motion.li
                        viewport={{ once: true }}
                        initial={{ opacity: 0, x: -100 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.7, delay: 0.6 }}
                    >
                        👨‍🏫 <strong>Más de 10 años enseñando:</strong> he trabajado con principiantes, niños, adultos y músicos avanzados.
                    </motion.li>
                    <motion.li
                        viewport={{ once: true }}
                        initial={{ opacity: 0, x: -100 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.7, delay: 0.7 }}
                    >
                        🚀 <strong>Resultados reales:</strong> cada clase tiene un objetivo claro y aplicable.
                    </motion.li>
                </ul>

                <div className="grid grid-cols-2 gap-3">

                    <motion.div
                        className="bg-neutral-100 rounded-xl p-6 shadow-md hover:shadow-lg transition-all text-center flex flex-col items-center"
                        viewport={{ once: true, amount: 0.3 }}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.7, delay: 0.2, ease: "easeOut" }}
                    >
                        <FaChalkboardTeacher className="text-4xl text-indigo-600 mb-2" />
                        <p className="text-3xl font-bold text-indigo-700">+10</p>
                        <p className="text-gray-700 text-sm whitespace-nowrap">años enseñando guitarra</p>
                    </motion.div>

                    <motion.div
                        className="bg-neutral-100 rounded-xl p-6 shadow-md hover:shadow-lg transition-all text-center flex flex-col items-center"
                        viewport={{ once: true, amount: 0.3 }}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.7, delay: 0.3, ease: "easeOut" }}
                    >
                        <FaUserGraduate className="text-4xl text-indigo-600 mb-2" />
                        <p className="text-3xl font-bold text-indigo-700">+150</p>
                        <p className="text-gray-700 text-sm whitespace-nowrap">alumnos satisfechos</p>
                    </motion.div>

                    <motion.div
                        className="bg-neutral-100 rounded-xl p-6 shadow-md hover:shadow-lg transition-all text-center flex flex-col items-center"
                        viewport={{ once: true, amount: 0.3 }}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.7, delay: 0.4, ease: "easeOut" }}
                    >
                        <FaMusic className="text-4xl text-indigo-600 mb-2" />
                        <p className="text-3xl font-bold text-indigo-700">+25</p>
                        <p className="text-gray-700 text-sm whitespace-nowrap">años en la escena musical</p>
                    </motion.div>

                    <motion.div
                        className="bg-neutral-100 rounded-xl p-6 shadow-md hover:shadow-lg transition-all text-center flex flex-col items-center"
                        viewport={{ once: true, amount: 0.3 }}
                        initial={{ opacity: 0, scale: 0.8 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.7, delay: 0.5, ease: "easeOut" }}
                    >
                        <FaGuitar className="text-4xl text-indigo-600 mb-2" />
                        <p className="text-3xl font-bold text-indigo-700">1,000+</p>
                        <p className="text-gray-700 text-sm whitespace-nowrap">clases impartidas</p>
                    </motion.div>

                </div>
            </div>
        </section>
    )
}

export default WhyLearnWMe