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
            {resultado.resultado.toFixed(4)} {resultado.unidad}
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