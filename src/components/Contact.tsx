import { FaWhatsapp } from 'react-icons/fa'

const Contact = () => {
    return (
        <section className="py-12 px-6 text-center text-white">
            <h2 className="text-3xl font-semibold text-indigo-600 mb-4">¿Listo para comenzar?</h2>
            <p className="mb-6 text-lg text-black">Agenda tu primera clase con Butch</p>
            <a
                href="https://wa.me/523310882137?text=Hola%20Butch!%20Quiero%20tomar%20clases%20de%20guitarra"
                target="_blank"
                rel="noopener noreferrer"
            >
                <button className="bg-neutral-900 text-red-600 hover:bg-neutral-950 hover:cursor-pointer">
                    <FaWhatsapp className="text-2xl text-green-500">Contactar por WhatsApp</FaWhatsapp>
                </button>
            </a>
        </section>
    )
}

export default Contact