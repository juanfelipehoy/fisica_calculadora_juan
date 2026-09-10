const ResultCard = ({ resultado, error }) => {
  if (error) {
    return (
      <div className="mt-4 p-4 bg-red-50 border border-red-200 rounded-md">
        <div className="flex items-center">
          <svg className="w-5 h-5 text-red-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
          </svg>
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
          <svg className="w-5 h-5 text-green-500 mr-2" fill="currentColor" viewBox="0 0 20 20">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
          </svg>
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