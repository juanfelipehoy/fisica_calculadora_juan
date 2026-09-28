const Help = () => {
    const formulas = [
        {
            nombre: "Velocidad",
            formula: "v = d / t",
            descripcion: "La velocidad es la relación entre la distancia recorrida y el tiempo empleado.",
            variables: [
                { simbolo: "v", nombre: "Velocidad", unidad: "m/s" },
                { simbolo: "d", nombre: "Distancia", unidad: "m" },
                { simbolo: "t", nombre: "Tiempo", unidad: "s" }
            ],
            ejemplo: "Si un objeto recorre 100 metros en 10 segundos, su velocidad es 10 m/s."
        },
        {
            nombre: "Aceleración",
            formula: "a = (vf - vi) / t",
            descripcion: "La aceleración es el cambio de velocidad por unidad de tiempo.",
            variables: [
                { simbolo: "a", nombre: "Aceleración", unidad: "m/s²" },
                { simbolo: "vf", nombre: "Velocidad Final", unidad: "m/s" },
                { simbolo: "vi", nombre: "Velocidad Inicial", unidad: "m/s" },
                { simbolo: "t", nombre: "Tiempo", unidad: "s" }
            ],
            ejemplo: "Si un vehículo aumenta de 0 a 20 m/s en 5 segundos, su aceleración es 4 m/s²."
        },
        {
            nombre: "Fuerza",
            formula: "F = m × a",
            descripcion: "La fuerza es el producto de la masa por la aceleración (Segunda Ley de Newton).",
            variables: [
                { simbolo: "F", nombre: "Fuerza", unidad: "N (Newton)" },
                { simbolo: "m", nombre: "Masa", unidad: "kg" },
                { simbolo: "a", nombre: "Aceleración", unidad: "m/s²" }
            ],
            ejemplo: "Si un objeto de 10 kg se acelera a 2 m/s², la fuerza aplicada es 20 N."
        },
        {
            nombre: "Energía Cinética",
            formula: "Ec = ½ × m × v²",
            descripcion: "La energía cinética es la energía que posee un cuerpo debido a su movimiento.",
            variables: [
                { simbolo: "Ec", nombre: "Energía Cinética", unidad: "J (Joule)" },
                { simbolo: "m", nombre: "Masa", unidad: "kg" },
                { simbolo: "v", nombre: "Velocidad", unidad: "m/s" }
            ],
            ejemplo: "Un objeto de 5 kg moviéndose a 10 m/s tiene 250 J de energía cinética."
        },
        {
            nombre: "Densidad",
            formula: "ρ = m / V",
            descripcion: "La densidad es la relación entre la masa de un cuerpo y su volumen.",
            variables: [
                { simbolo: "ρ", nombre: "Densidad", unidad: "kg/m³" },
                { simbolo: "m", nombre: "Masa", unidad: "kg" },
                { simbolo: "V", nombre: "Volumen", unidad: "m³" }
            ],
            ejemplo: "Si un material tiene 2000 kg de masa en 1 m³ de volumen, su densidad es 2000 kg/m³."
        }
    ];

    return (
        <div className="bg-white rounded-lg shadow-lg p-6">
            <h2 className="text-2xl font-bold text-gray-800 mb-6">
                Guía de Fórmulas Físicas
            </h2>
            
            <div className="space-y-6">
                {formulas.map((formula, index) => (
                    <div key={index} className="border-l-4 border-blue-500 pl-4 py-2">
                        <h3 className="text-lg font-semibold text-gray-800 mb-2">
                            {formula.nombre}
                        </h3>
                        <div className="bg-blue-50 px-4 py-2 rounded-md mb-3">
                            <code className="text-lg font-mono text-blue-800">
                                {formula.formula}
                            </code>
                        </div>
                        <p className="text-gray-600 mb-3">{formula.descripcion}</p>
                        
                        <div className="mb-3">
                            <h4 className="font-medium text-gray-700 mb-2">Variables:</h4>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                                {formula.variables.map((variable, vIndex) => (
                                    <div key={vIndex} className="bg-gray-50 px-3 py-2 rounded text-sm">
                                        <span className="font-mono font-bold text-blue-600">
                                            {variable.simbolo}
                                        </span>
                                        <span className="text-gray-600">
                                            : {variable.nombre} ({variable.unidad})
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>
                        
                        <div className="bg-yellow-50 px-4 py-2 rounded-md">
                            <p className="text-sm text-yellow-800">
                                <strong>Ejemplo:</strong> {formula.ejemplo}
                            </p>
                        </div>
                    </div>
                ))}
            </div>

            <div className="mt-6 p-4 bg-green-50 border border-green-200 rounded-md">
                <h4 className="font-semibold text-green-800 mb-2">Consejos de uso:</h4>
                <ul className="text-sm text-green-700 space-y-1">
                    <li>• Asegúrese de ingresar valores numéricos válidos</li>
                    <li>• Utilice las unidades indicadas para cada variable</li>
                    <li>• El tiempo no puede ser cero o negativo en velocidad y aceleración</li>
                    <li>• La masa y el volumen no pueden ser negativos</li>
                    <li>• Los resultados se muestran con 4 decimales de precisión</li>
                </ul>
            </div>
        </div>
    );
};

export default Help;