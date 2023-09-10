import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setUsername } from "../../Reducer/usernameSlice";
import { database } from "../../config/firebase";
import Voting from "../Voting/Voting";
import Display from "../Display/Display";
import Button from "../Button/Button";

const generateRandomUsername = () => `user${Math.floor(Math.random() * 1000)}`;

const UsernameGenerator = () => {
  const dispatch = useDispatch();
  const username = useSelector((state) => state.username);
  const [inputUsername, setInputUsername] = useState(username);
  const [savedUsernames, setSavedUsernames] = useState([]);
  const [userRatings, setUserRatings] = useState({});
  const [selectedUsername, setSelectedUsername] = useState(null);

  useEffect(() => {
    const usernamesRef = database.ref("usernames");

    const handleSnapshot = (snapshot) => {
      const usernames = snapshot.val();
      if (usernames) {
        setSavedUsernames(
          Object.values(usernames).map((user) => user.username)
        );
      }
    };

    usernamesRef.on("value", handleSnapshot);

    return () => {
      usernamesRef.off("value", handleSnapshot);
    };
  }, []);

  useEffect(() => {
    if (inputUsername && inputUsername !== username) {
      dispatch(setUsername(inputUsername));

      const usernameRef = database.ref("usernames").push();
      usernameRef.set({
        username: inputUsername,
        rating: userRatings[inputUsername] || null,
      });

      localStorage.setItem("username", inputUsername);
    }
  }, [inputUsername, username, dispatch, userRatings]);

  useEffect(() => {
    if (!username) {
      setInputUsername(generateRandomUsername());
    }
  }, [username]);

  const handleRatingChange = (rating) => {
    if (selectedUsername) {
      setUserRatings({ ...userRatings, [selectedUsername]: rating });

      database
        .ref("usernames")
        .orderByChild("username")
        .equalTo(selectedUsername)
        .once("value", (snapshot) => {
          snapshot.forEach((childSnapshot) => {
            const key = childSnapshot.key;
            database.ref(`usernames/${key}`).update({ rating });
          });
        });
    }
  };

  const handleResetSession = () => {};

  const handleRefreshUser = () => {};

  return (
    <div className="flex-1 min-w-0">
      <div className="md:flex md:items-center md:justify-between">
        <h2 className="text-2xl font-bold leading-7 text-gray-900 sm:text-3xl">
          Scrum Voting App
        </h2>
        <div className="flex-1 min-w-0">
          <div className="mt-10 flex md:mt-0 md:ml-4 justify-center">
            Username:
            <p
              className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              style={{ backgroundColor: "white" }}
            >
              {inputUsername}
            </p>
          </div>
        </div>
      </div>
      <div className="flex-1 min-w-0">
        <div className="mt-4 flex justify-center">
          <Button
            label="Reset Session"
            onClick={handleResetSession}
            color="red"
          />
          <span className="mx-2"></span> {/* Add a space between the buttons */}
          <Button
            label="Refresh User"
            onClick={handleRefreshUser}
            color="blue"
          />
        </div>

        <Voting handleRatingChange={handleRatingChange} />

        <Display
          inputUsername={inputUsername}
          savedUsernames={savedUsernames}
          userRatings={userRatings}
          setSelectedUsername={setSelectedUsername}
        />
      </div>
    </div>
  );
};

export default UsernameGenerator;