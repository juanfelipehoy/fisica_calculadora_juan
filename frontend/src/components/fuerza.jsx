import { useState } from "react";
import Input from "./Input.jsx";
import CalcularButton from "./CalcularButton.jsx";
import ResultCard from "./ResultCard.jsx";

function Fuerza({ onResult }) {
    const [masa, setMasa] = useState("");
    const [aceleracion, setAceleracion] = useState("");
    const [resultado, setResultado] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(false);
    const [errors, setErrors] = useState({});

    const validateInputs = () => {
        const newErrors = {};
        
        if (masa === "" || isNaN(masa)) {
            newErrors.masa = "La masa es requerida";
        } else if (Number(masa) < 0) {
            newErrors.masa = "La masa no puede ser negativa";
        }
        
        if (aceleracion === "" || isNaN(aceleracion)) {
            newErrors.aceleracion = "La aceleración es requerida";
        }
        
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const CalcularFuerza = async () => {
        if (!validateInputs()) return;

        setLoading(true);
        setError(null);
        setResultado(null);

        try {
            const response = await fetch('http://localhost:5000/fisica/fuerza', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ 
                    masa: Number(masa), 
                    aceleracion: Number(aceleracion) 
                })
            });
            
            const data = await response.json();
            
            if (!response.ok) {
                setError(data.mensaje || 'Error en el cálculo');
                setResultado(null);
            } else {
                setResultado(data);
                setError(null);
                if (onResult) onResult(data);
            }
        } catch (err) {
            setError('Error de conexión con el servidor');
            setResultado(null);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="space-y-4">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Calculadora de Fuerza</h2>
            
            <Input
                label="Masa"
                placeholder="Ingrese la masa"
                value={masa}
                onChange={(e) => setMasa(e.target.value)}
                unit="kg"
                error={errors.masa}
            />
      
            <Input
                label="Aceleración"
                placeholder="Ingrese la aceleración"
                value={aceleracion}
                onChange={(e) => setAceleracion(e.target.value)}
                unit="m/s²"
                error={errors.aceleracion}
            />

            <CalcularButton 
                onClick={CalcularFuerza} 
                loading={loading}
                disabled={!masa || !aceleracion}
                className="bg-red-600 hover:bg-red-700"
            >
                Calcular Fuerza
            </CalcularButton>
            
            <ResultCard resultado={resultado} error={error} />
        </div>
    );
}

export default Fuerza;