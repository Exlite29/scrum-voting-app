import React from "react";

const Button = ({ label, onClick, color }) => {
  const backgroundColorClass = color === "red" ? "bg-red-500" : "bg-blue-500";

  return (
    <button
      onClick={onClick}
      className={`inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white ${backgroundColorClass} hover:${backgroundColorClass.replace(
        "500",
        "600"
      )} focus:outline-none focus:ring-2 focus:ring-offset-2 ${backgroundColorClass.replace(
        "500",
        "500"
      )}`}
    >
      {label}
    </button>
  );
};

export default Button;
