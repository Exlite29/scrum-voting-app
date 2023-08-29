import Input from "../../Input/Input";

const UserName = () => {
  return (
    <Input
      label="Username"
      placeholder="Type a username..."
      //value={user ? user[currentUserId].username : "Loading username..."}
      name="username"
      className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
    />
  );
};

export default UserName;
