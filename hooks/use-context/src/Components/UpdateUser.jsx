import React, { useContext, useState } from "react";
import { UserContext } from "./UserContext";

const UpdateUser = () => {
  const { updateUser } = useContext(UserContext);
  const [newName, setNewName] = useState(UserContext);
  const handleSubmit = (e) => {
    e.preventDefault();
    if (newName.trim()) {
      updateUser(newName);
      setNewName("");
    }
  };
  return (
    <div>
      <h2>Update User Name</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          onChange={(e) => setNewName(e.target.value)}
          placeholder="Enter New Name"
        />
        <br />
        <button type="submit">Update Name</button>
      </form>
    </div>
  );
};

export default UpdateUser;
