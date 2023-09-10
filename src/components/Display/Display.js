import React from "react";
import PropTypes from "prop-types";

const Display = ({ savedUsernames, userRatings, setSelectedUsername }) => {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="inline-block max-w-screen-sm border border-solid border-gray-300 rounded-lg p-4 bg-white">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold">Participants:</h3>

          <button className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded ">
            Reveal
          </button>
        </div>
        <ul>
          {savedUsernames.map((savedUsername, index) => (
            <li
              key={index}
              onClick={() => setSelectedUsername(savedUsername)}
              className="cursor-pointer"
            >
              <div className="flex space-x-3 items-center">
                <img
                  className="h-9 w-9 rounded-full"
                  src={`https://i.ibb.co/FggrjYN/user-solid.png`}
                  alt="avatar"
                />
                <div className="flex-1 space-y-1">
                  <h3 className="text-md font-medium p-2">
                    {`${savedUsername} (${userRatings[savedUsername] || 0})`}
                  </h3>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

Display.propTypes = {
  savedUsernames: PropTypes.array.isRequired,
  userRatings: PropTypes.object.isRequired,
  setSelectedUsername: PropTypes.func.isRequired,
};

export default Display;
