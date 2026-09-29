import { useState } from "react";
import Input from "./Input.jsx";
import CalcularButton from "./CalcularButton.jsx";
import ResultCard from "./ResultCard.jsx";

function Energia({ onResult }) {
    const [masa, setMasa] = useState("");
    const [velocidad, setVelocidad] = useState("");
    const [resultado, setResultado] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const [errors, setErrors] = useState({});

    const CalcularEnergia = async () => {
        setLoading(true);
        setError(null);
        setResultado(null);
        setErrors({});

        try {
            const response = await fetch('http://localhost:5000/fisica/energia-cinetica', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ masa, velocidad })
            });
            
            const data = await response.json();
            
            if (!response.ok) {
                setError(data.mensaje || 'Error en el cálculo');
                setErrors(data.errores || {});
                setResultado(null);
            } else {
                setResultado(data);
                setError(null);
                if (onResult) onResult(data);
            }
        } catch {
            setError('Error de conexión con el servidor');
            setResultado(null);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="space-y-4">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Calculadora de Energía Cinética</h2>
            
            <Input
                label="Masa"
                placeholder="Ingrese la masa"
                value={masa}
                onChange={(e) => setMasa(e.target.value)}
                unit="kg"
                error={errors.masa}
            />
      
            <Input
                label="Velocidad"
                placeholder="Ingrese la velocidad"
                value={velocidad}
                onChange={(e) => setVelocidad(e.target.value)}
                unit="m/s"
                error={errors.velocidad}
            />

            <CalcularButton 
                onClick={CalcularEnergia} 
                loading={loading}
                className="bg-yellow-600 hover:bg-yellow-700"
            >
                Calcular Energía Cinética
            </CalcularButton>
            
            <ResultCard resultado={resultado} error={error} />
        </div>
    );
}

export default Energia;