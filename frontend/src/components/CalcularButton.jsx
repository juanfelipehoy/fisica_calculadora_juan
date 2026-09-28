const CalcularButton = ({ onClick, loading, disabled, children, className = "" }) => {
  return (
    <button
      onClick={onClick}
      disabled={disabled || loading}
      className={`w-full px-4 py-2 text-white font-medium rounded-md transition-colors duration-200 ${
        loading || disabled
          ? 'bg-gray-400 cursor-not-allowed'
          : 'bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500'
      } ${className}`}
    >
      {loading ? (
        <span>Calculando...</span>
      ) : (
        children
      )}
    </button>
  );
};

export default CalcularButton;