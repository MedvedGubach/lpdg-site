import { Fragment, useState } from "react";
import GuitarTips from "./GuitarTips";
import MoreAbout from "./MoreAbout";
const ButchFeats = () => {
    const [activeTab, setActiveTab] = useState('tips');
    const tabs = [
        { id: "tips", label: "Tips y Consejos" },
        { id: "moreAbout", label: "Más Sobre Mí" },
        { id: "brands", label: "Marcas que Confían en Mí" },
    ];
    return (
        <section className="mx-auto py-12 px-4">
            <h2 className="text-3xl text-indigo-600 font-semibold text-center mb-10">Butch en Acción</h2>
            <div className="flex justify-center space-x-4 border-b border-gray-500 mb-6">
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
                {activeTab === "tips" && (
                    <Fragment>
                        <GuitarTips />
                    </Fragment>
                )}
                {activeTab === "moreAbout" && (
                    <Fragment>
                        <div>
                            <MoreAbout />
                        </div>
                    </Fragment>
                )}
                {activeTab === "brands" && (
                    <Fragment>
                        <div className="text-center">
                            <h2 className="text-xl font-bold mb-2">Marcas que colaboran conmigo</h2>
                        </div>
                    </Fragment>
                )}
            </div>
        </section>
    )
}

export default ButchFeats