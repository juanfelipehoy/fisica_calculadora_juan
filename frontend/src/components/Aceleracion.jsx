import { useState } from "react";
import Input from "./Input.jsx";
import CalcularButton from "./CalcularButton.jsx";
import ResultCard from "./ResultCard.jsx";

function Aceleracion({ onResult }) {
    const [velocidadInicial, setVelocidadInicial] = useState("");
    const [velocidadFinal, setVelocidadFinal] = useState("");
    const [tiempo, setTiempo] = useState("");
    const [resultado, setResultado] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const [errors, setErrors] = useState({});

    const CalcularAceleracion = async () => {
        setLoading(true);
        setError(null);
        setResultado(null);
        setErrors({});

        try {
            const response = await fetch('http://localhost:5000/fisica/aceleracion', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ velocidadInicial, velocidadFinal, tiempo })
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
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Calculadora de Aceleración</h2>
            
            <Input
                label="Velocidad Inicial"
                placeholder="Ingrese la velocidad inicial"
                value={velocidadInicial}
                onChange={(e) => setVelocidadInicial(e.target.value)}
                unit="m/s"
                error={errors.velocidadInicial}
            />
      
            <Input
                label="Velocidad Final"
                placeholder="Ingrese la velocidad final"
                value={velocidadFinal}
                onChange={(e) => setVelocidadFinal(e.target.value)}
                unit="m/s"
                error={errors.velocidadFinal}
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
                onClick={CalcularAceleracion} 
                loading={loading}
                className="bg-green-600 hover:bg-green-700"
            >
                Calcular Aceleración
            </CalcularButton>
            
            <ResultCard resultado={resultado} error={error} />
        </div>
    );
}

export default Aceleracion;