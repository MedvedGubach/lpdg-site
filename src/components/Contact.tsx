import { FaWhatsapp } from 'react-icons/fa'

const Contact = () => {
  return (
    <section className="py-20 px-6 text-center bg-gradient-to-b from-white to-neutral-100 border-t border-neutral-400">
      <h2 className="text-4xl font-bold text-indigo-700 mb-4">¿Listo para comenzar?</h2>
      <p className="mb-8 text-xl text-gray-700">Agenda tu primera clase con Butch y empieza a tocar lo que más te gusta</p>

      <a
        href="https://wa.me/523310882137?text=Hola%20Butch!%20Quiero%20tomar%20clases%20de%20guitarra"
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Enviar mensaje por WhatsApp a Butch"
      >
        <button className="inline-flex items-center gap-3 bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-3 rounded-full text-lg shadow-lg transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-green-400 focus:ring-offset-2 hover:cursor-pointer">
          <FaWhatsapp className="text-2xl" />
          Contactar por WhatsApp
        </button>
      </a>
    </section>
  );
};

export default Contact;
