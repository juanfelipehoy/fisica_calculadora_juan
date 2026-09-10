const History = ({ history, onClear }) => {
  if (history.length === 0) {
    return (
      <div className="mt-6 p-4 bg-gray-50 border border-gray-200 rounded-md">
        <p className="text-gray-500 text-center">No hay cálculos en el historial</p>
      </div>
    );
  }

  return (
    <div className="mt-6">
      <div className="flex justify-between items-center mb-3">
        <h3 className="text-lg font-semibold text-gray-700">Historial de Cálculos</h3>
        <button
          onClick={onClear}
          className="text-sm text-red-600 hover:text-red-800 underline"
        >
          Limpiar historial
        </button>
      </div>
      <div className="space-y-2 max-h-64 overflow-y-auto">
        {history.map((item, index) => (
          <div key={index} className="p-3 bg-white border border-gray-200 rounded-md shadow-sm">
            <div className="flex justify-between items-start">
              <div>
                <p className="font-medium text-gray-800 capitalize">{item.operacion}</p>
                <p className="text-sm text-gray-600">
                  Resultado: {item.resultado.toFixed(4)} {item.unidad}
                </p>
              </div>
              <span className="text-xs text-gray-400">
                {new Date(item.timestamp).toLocaleTimeString()}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default History;