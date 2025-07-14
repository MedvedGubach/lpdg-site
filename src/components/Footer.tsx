import { FaFacebook, FaInstagram, FaYoutube } from "react-icons/fa"

const Footer = () => {
    return (
        <footer className="bg-neutral-300 text-black">
            <p className="text-center">Siguelo en sus redes sociales.</p>
            <div className="flex justify-center gap-6 text-2xl">
                <a href="https://www.facebook.com/leccionespracticasdeguitarra" target="_blank" rel="noopener noreferrer">
                    <FaFacebook className="text-blue-500 text-2xl" />
                </a>
                <a href="https://www.instagram.com/leccionespracticasdeguitarra/" target="_blank" rel="noopener noreferrer">
                    <FaInstagram className="text-violet-500 text-2xl" />
                </a>
                <a href="https://www.youtube.com/c/LeccionesPr%C3%A1cticasdeGuitarraButchGarc%C3%ADa" target="_blank" rel="noopener noreferrer">
                    <FaYoutube className="text-red-500 text-2xl" />
                </a>
            </div>
            <p className="mb-3 mt-3 text-sm text-center">© 2025 Armando "Butch" Garcia. Todos los derechos reservados.</p>
        </footer>
    )
}

export default Footer