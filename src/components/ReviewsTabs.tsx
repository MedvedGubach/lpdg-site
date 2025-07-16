import { useState, useRef, useLayoutEffect } from "react";
import Reviews from './Reviews';
import { motion, AnimatePresence } from "framer-motion";


const ReviewsTabs = () => {
    const [activeTab, setActiveTab] = useState('reviews');
    const [tabUnderlineProps, setTabUnderlineProps] = useState({ left: 0, width: 0 });

    const tabs = [
        { id: "reviews", label: "Testimonios" },
        { id: "gallery", label: "Galeria" },
    ];

    const tabRefs = useRef<Record<string, HTMLButtonElement | null>>({});
    useLayoutEffect(() => {
        const currentTab = tabRefs.current[activeTab];
        if (currentTab) {
            const { offsetLeft, clientWidth } = currentTab;
            setTabUnderlineProps({ left: offsetLeft, width: clientWidth });
        }
    }, [activeTab]);

    return (
        <section id="reviews" className="mx-auto py-12 px-4">
            <div className="relative flex justify-center space-x-0 md:space-x-4 border-b border-gray-500 mb-6">
                {tabs.map((tab) => (
                    <button
                        key={tab.id}
                        ref={(el) => {
                            tabRefs.current[tab.id] = el;
                        }}
                        onClick={() => setActiveTab(tab.id)}
                        className={`relative text-sm md:text-xl py-2 px-4 font-semibold transition-colors duration-200 ${activeTab === tab.id
                                ? "text-indigo-600"
                                : "text-gray-500 hover:text-indigo-500"
                            }`}
                    >
                        {tab.label}
                    </button>
                ))}
                <motion.div
                    className="absolute bottom-0 h-1 bg-indigo-600 rounded-full"
                    layout
                    transition={{ type: "spring", stiffness: 500, damping: 30 }}
                    style={{
                        left: tabUnderlineProps.left,
                        width: tabUnderlineProps.width,
                    }}
                />
            </div>

            {/* Contenido Tabs */}
            <AnimatePresence mode="wait">
                {activeTab === "reviews" && (
                    <motion.div
                        key="reviews"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.3 }}
                    >
                        <Reviews />
                    </motion.div>
                )}
                {activeTab === "gallery" && (
                    <motion.div
                        key="gallery"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.3 }}
                    >
                        <div className="text-center">
                            <h2 className="text-xl font-bold mb-2">Galeria de Alumnos en Clase Aquí</h2>
                            <p>Clases online, presenciales o cursos grabados a tu ritmo.</p>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </section>
    )
}

export default ReviewsTabs