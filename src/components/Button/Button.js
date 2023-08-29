const Button = ({ title, handleClick, disabled, className }) => {
  return (
    <button
      type="button"
      onClick={handleClick}
      disabled={disabled}
      className={`relative inline-flex items-center px-4 py-2 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 ${className}`}
    >
      {title}
    </button>
  );
};

export default Button;
