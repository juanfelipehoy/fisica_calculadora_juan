const formatear = (valor) => {
  if (!Number.isFinite(valor)) return "No se pudo calcular";
  if (valor === 0) return "0";

  const magnitud = Math.abs(valor);

  if (magnitud < 0.0001 || magnitud >= 1e12) {
    return valor.toExponential(4).replace("e", " × 10^");
  }

  return Number(valor.toFixed(4)).toLocaleString("es-ES", {
    maximumFractionDigits: 4
  });
};

const ResultCard = ({ resultado, error }) => {
  if (error) {
    return (
      <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-md">
        <div className="flex items-center">
          <p className="text-red-700 font-medium">Error</p>
        </div>
        <p className="text-red-600 mt-1">{error}</p>
      </div>
    );
  }

  if (resultado) {
    return (
      <div className="mt-4 p-4 bg-green-50 border border-green-200 rounded-md">
        <div className="flex items-center">
          <p className="text-green-700 font-medium">Resultado</p>
        </div>
        <div className="mt-2">
          <p className="text-lg font-semibold text-green-800">
            {formatear(Number(resultado.resultado))} {resultado.unidad}
          </p>
          <p className="text-sm text-green-600 mt-1">
            Operación: {resultado.operacion}
          </p>
        </div>
      </div>
    );
  }

  return null;
};

export default ResultCard;
