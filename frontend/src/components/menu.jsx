import { useState } from "react";
import Velocidad from "./Velocidad.jsx";
import Aceleracion from "./Aceleracion.jsx";
import Fuerza from "./fuerza.jsx";
import Energia from "./Energia.jsx";
import Densidad from "./Densidad.jsx";
import History from "./History.jsx";
import Help from "./Help.jsx";

function Menu() {
    const [componenteActivo, setComponenteActivo] = useState(null);
    const [showHelp, setShowHelp] = useState(false);
    const [history, setHistory] = useState([]);

    const addToHistory = (resultado) => {
        const newEntry = {
            ...resultado,
            timestamp: new Date().toISOString()
        };
        setHistory(prev => [newEntry, ...prev].slice(0, 10)); // Guardar solo los últimos 10
    };

    const clearHistory = () => {
        setHistory([]);
    };

    const renderComponente = () => {
        if (showHelp) {
            return <Help />;
        }
        
        switch(componenteActivo) {
            case 'velocidad': return <Velocidad onResult={addToHistory} />;
            case 'aceleracion': return <Aceleracion onResult={addToHistory} />;
            case 'fuerza': return <Fuerza onResult={addToHistory} />;
            case 'energia': return <Energia onResult={addToHistory} />;
            case 'densidad': return <Densidad onResult={addToHistory} />;
            default: return <div className="text-center py-8 text-gray-500">Seleccione una calculadora para comenzar</div>;
        }
    };

    const calculadoras = [
        { id: 'velocidad', nombre: 'Velocidad', color: 'bg-blue-600 hover:bg-blue-700', descripcion: 'v = d/t' },
        { id: 'aceleracion', nombre: 'Aceleración', color: 'bg-green-600 hover:bg-green-700', descripcion: 'a = (vf - vi)/t' },
        { id: 'fuerza', nombre: 'Fuerza', color: 'bg-red-600 hover:bg-red-700', descripcion: 'F = m × a' },
        { id: 'energia', nombre: 'Energía Cinética', color: 'bg-yellow-600 hover:bg-yellow-700', descripcion: 'Ec = ½mv²' },
        { id: 'densidad', nombre: 'Densidad', color: 'bg-purple-600 hover:bg-purple-700', descripcion: 'ρ = m/V' }
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100">
            <div className="container mx-auto px-4 py-8">
                {/* Header */}
                <div className="text-center mb-8">
                    <h1 className="text-4xl font-bold text-gray-800 mb-2">
                        Calculadoras de Física
                    </h1>
                    <p className="text-gray-600">
                        Herramientas interactivas para cálculos físicos básicos
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                    {/* Panel de navegación */}
                    <div className="lg:col-span-1">
                        <div className="bg-white rounded-lg shadow-lg p-6">
                            <h2 className="text-xl font-semibold text-gray-800 mb-4">
                                Selecciona una calculadora
                            </h2>
                            <div className="space-y-2">
                                {calculadoras.map(calc => (
                                    <button
                                        key={calc.id}
                                        onClick={() => {
                                            setComponenteActivo(calc.id);
                                            setShowHelp(false);
                                        }}
                                        className={`w-full text-left px-4 py-3 rounded-lg transition-all duration-200 ${
                                            componenteActivo === calc.id && !showHelp
                                                ? calc.color + ' text-white shadow-md transform scale-105'
                                                : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
                                        }`}
                                    >
                                        <div className="font-medium">{calc.nombre}</div>
                                        <div className={`text-sm ${componenteActivo === calc.id && !showHelp ? 'text-gray-200' : 'text-gray-500'}`}>
                                            {calc.descripcion}
                                        </div>
                                    </button>
                                ))}
                            </div>
                            
                            <button
                                onClick={() => {
                                    setShowHelp(true);
                                    setComponenteActivo(null);
                                }}
                                className={`w-full mt-4 px-4 py-3 rounded-lg transition-all duration-200 ${
                                    showHelp
                                        ? 'bg-indigo-600 text-white shadow-md transform scale-105'
                                        : 'bg-gray-100 hover:bg-gray-200 text-gray-700'
                                }`}
                            >
                                <div className="font-medium">Guía de Fórmulas</div>
                                <div className={`text-sm ${showHelp ? 'text-gray-200' : 'text-gray-500'}`}>
                                    Información y ejemplos
                                </div>
                            </button>
                        </div>

                        {/* Historial */}
                        <History history={history} onClear={clearHistory} />
                    </div>

                    {/* Panel principal */}
                    <div className="lg:col-span-2">
                        <div className="bg-white rounded-lg shadow-lg p-6">
                            {renderComponente()}
                        </div>
                    </div>
                </div>

                {/* Footer */}
                <div className="mt-8 text-center text-gray-500 text-sm">
                    <p>API REST + React Frontend | Sistema de Cálculos Físicos</p>
                    <p className="mt-1">Backend: localhost:5000 | Frontend: Vite + React + Tailwind</p>
                </div>
            </div>
        </div>
    );
}

export default Menu;