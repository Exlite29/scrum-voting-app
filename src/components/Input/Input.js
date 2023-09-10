import React from "react";

const Input = () => {
  return (
    <div>
      <p>Feature Title</p>
      <input
        className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
        type="text"
        id="userInput"
        placeholder="Feature Title"
      />
    </div>
  );
};

export default Input;
