import { useState, useRef, useLayoutEffect, useEffect } from "react";
import Reviews from './Reviews';
import { motion, AnimatePresence } from "framer-motion";

const ReviewsTabs = () => {
    const [activeTab, setActiveTab] = useState('reviews');
    const [tabUnderlineProps, setTabUnderlineProps] = useState({ left: 0, width: 0 });
    const tabs = [{ id: "reviews", label: "Reseñas" }, { id: "gallery", label: "Testimonios" },];
    const [isWidgetLoaded, setIsWidgetLoaded] = useState(false);
    const widgetContainerRef = useRef<HTMLDivElement | null>(null);

    const tabRefs = useRef<Record<string, HTMLButtonElement | null>>({});
    useLayoutEffect(() => {
        const currentTab = tabRefs.current[activeTab];
        if (currentTab) {
            const { offsetLeft, clientWidth } = currentTab;
            setTabUnderlineProps({ left: offsetLeft, width: clientWidth });
        }
    }, [activeTab]);


    useEffect(() => {
        if (activeTab === 'reviews') {
            setIsWidgetLoaded(false);
            const interval = setInterval(() => {
                if (widgetContainerRef.current && widgetContainerRef.current.querySelector('iframe')) {
                    setIsWidgetLoaded(true);
                    clearInterval(interval);
                }
            }, 100);

            const timeout = setTimeout(() => {
                setIsWidgetLoaded(true);
                clearInterval(interval);
            }, 4000);

            return () => {
                clearInterval(interval);
                clearTimeout(timeout);
            };
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
                    style={{ left: tabUnderlineProps.left, width: tabUnderlineProps.width, }}
                />
            </div>

            {/* Contenido Tabs */}
            <AnimatePresence mode="wait">
                {activeTab === "gallery" && (
                    <motion.div
                        key="gallery"
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        transition={{ duration: 0.3 }}
                    >
                        <Reviews />
                    </motion.div>
                )}

                {activeTab === "reviews" && (
                    <motion.div
                        key="reviews"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.3 }}
                    >
                        {!isWidgetLoaded && (
                            <div className="flex justify-center items-center py-20">
                                <div className="animate-spin h-10 w-10 border-4 border-indigo-600 border-t-transparent rounded-full"></div>
                            </div>
                        )}

                        <div ref={widgetContainerRef} className={`${!isWidgetLoaded ? 'hidden' : ''}`}>
                            <script src="https://static.elfsight.com/platform/platform.js" async></script>
                            <div className="elfsight-app-8108c59d-0063-4331-9913-a76c9b25f805" data-elfsight-app-lazy></div>
                        </div>
                    </motion.div>
                )}

            </AnimatePresence>
        </section>
    )
}

export default ReviewsTabs