
import { FaFacebook, FaInstagram, FaYoutube } from 'react-icons/fa'
import LPDGLogo from '../assets/images/LPDGLogo.jpg'
const Navbar = () => {
    return (
        <nav className="top-0 z-50 py-8 items-center flex flex-wrap justify-between bg-neutral-300 text-black">
            <div className="flex items-center">
                <img src={LPDGLogo} height={40} width={40} alt="LPDG-Logo" className="mx-6 rounded-xl" />
            </div>

            <div className="flex gap-x-4 px-8">
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
        </nav>
    )
}

export default Navbar