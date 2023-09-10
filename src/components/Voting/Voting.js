import React from "react";

const Voting = ({ handleRatingChange }) => {
  return (
    <div className="flex items-center justify-center mt-8">
      <div className="inline-flex items-center px-4 bg-white py-2 border solid rounded-md shadow-sm text-sm font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
        <h3 className="text-lg leading-6 font-medium text-gray-900 inline">
          Cast Vote:
        </h3>
        <div>
          {[1, 2, 3, 4, 5].map((rating) => (
            <button
              key={rating}
              onClick={() => handleRatingChange(rating)}
              className="px-4 py-2 m-2 inline-flex items-center border border-transparent rounded-full shadow-sm text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none"
            >
              {rating}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Voting;
