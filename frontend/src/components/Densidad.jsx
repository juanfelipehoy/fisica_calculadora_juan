import { useState } from "react";
import Input from "./Input.jsx";
import CalcularButton from "./CalcularButton.jsx";
import ResultCard from "./ResultCard.jsx";

function Densidad({ onResult }) {
    const [masa, setMasa] = useState("");
    const [volumen, setVolumen] = useState("");
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
        
        if (volumen === "" || isNaN(volumen)) {
            newErrors.volumen = "El volumen es requerido";
        } else if (Number(volumen) <= 0) {
            newErrors.volumen = "El volumen debe ser mayor a cero";
        }
        
        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const CalcularDensidad = async () => {
        if (!validateInputs()) return;

        setLoading(true);
        setError(null);
        setResultado(null);

        try {
            const response = await fetch('http://localhost:5000/fisica/densidad', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({ 
                    masa: Number(masa), 
                    volumen: Number(volumen) 
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
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Calculadora de Densidad</h2>
            
            <Input
                label="Masa"
                placeholder="Ingrese la masa"
                value={masa}
                onChange={(e) => setMasa(e.target.value)}
                unit="kg"
                error={errors.masa}
            />
      
            <Input
                label="Volumen"
                placeholder="Ingrese el volumen"
                value={volumen}
                onChange={(e) => setVolumen(e.target.value)}
                unit="m³"
                error={errors.volumen}
            />

            <CalcularButton 
                onClick={CalcularDensidad} 
                loading={loading}
                disabled={!masa || !volumen}
                className="bg-purple-600 hover:bg-purple-700"
            >
                Calcular Densidad
            </CalcularButton>
            
            <ResultCard resultado={resultado} error={error} />
        </div>
    );
}

export default Densidad;