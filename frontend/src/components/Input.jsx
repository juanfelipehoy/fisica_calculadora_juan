const Input = ({ label, type = "text", placeholder, value, onChange, unit, error }) => {
  return (
    <div className="space-y-1">
      <label className="block text-sm font-medium text-gray-700">
        {label} {unit && <span className="text-gray-500">({unit})</span>}
      </label>
      <input
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
        className={`w-full px-3 py-2 border rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 ${
          error ? 'border-red-500' : 'border-gray-300'
        }`}
      />
      {error && <p className="text-xs text-red-500">{error}</p>}
    </div>
  );
};

export default Input;