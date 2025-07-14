import { Fragment, useState } from 'react';
import Reviews from './Reviews';

const Tabs = () => {
    const [activeTab, setActiveTab] = useState('reviews');
    const tabs = [
        { id: "reviews", label: "Testimonios" },
        { id: "gallery", label: "Galeria" },
    ];
    return (
        <section className="mx-auto py-12 px-4">
            <div className="flex justify-center space-x-4 border-b border-gray-300 mb-6">
                {tabs.map((tab) => (
                    <button
                        key={tab.id}
                        onClick={() => setActiveTab(tab.id)}
                        className={`text-xl py-2 px-4 font-semibold transition-all duration-200 border-b-2 ${activeTab === tab.id
                            ? "border-indigo-600 text-indigo-600"
                            : "border-transparent text-gray-500 hover:text-indigo-500"
                            }`}
                    >
                        {tab.label}
                    </button>
                ))}
            </div>

            {/* Contenido Tabs */}
            <div>
                {activeTab === "reviews" && (
                    <Fragment>
                        <Reviews />
                    </Fragment>
                )}
                {activeTab === "gallery" && (
                    <Fragment>
                        <div className="text-center">
                            <h2 className="text-xl font-bold mb-2">Galeria de Alumnos en Clase Aquí</h2>
                            <p>Clases online, presenciales o cursos grabados a tu ritmo.</p>
                        </div>
                    </Fragment>
                )}
            </div>
        </section>
    )
}

export default Tabs