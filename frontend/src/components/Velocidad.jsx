import { useState } from "react";
import Input from "./Input.jsx";
import CalcularButton from "./CalcularButton.jsx";
import ResultCard from "./ResultCard.jsx";

function Velocidad({ onResult }) {
    const [distancia, setDistancia] = useState("");
    const [tiempo, setTiempo] = useState("");
    const [resultado, setResultado] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const [errors, setErrors] = useState({});

    const CalcularVelocidad = async () => {
        setLoading(true);
        setError(null);
        setResultado(null);
        setErrors({});

        try {
            const response = await fetch('http://localhost:5000/fisica/velocidad', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ distancia, tiempo })
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
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Calculadora de Velocidad</h2>
            
            <Input
                label="Distancia"
                placeholder="Ingrese la distancia"
                value={distancia}
                onChange={(e) => setDistancia(e.target.value)}
                unit="m"
                error={errors.distancia}
            />
      
            <Input
                label="Tiempo"
                placeholder="Ingrese el tiempo"
                value={tiempo}
                onChange={(e) => setTiempo(e.target.value)}
                unit="s"
                error={errors.tiempo}
            />

            <CalcularButton 
                onClick={CalcularVelocidad} 
                loading={loading}
                className="bg-blue-600 hover:bg-blue-700"
            >
                Calcular Velocidad
            </CalcularButton>
            
            <ResultCard resultado={resultado} error={error} />
        </div>
    );
}

export default Velocidad;