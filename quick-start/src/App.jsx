import React from "react";

const MyButton = () => {
  const handleClick = () => {
    alert("You clicked the button");
  };
  return <button onClick={handleClick}>I'm a button</button>;
};
const user = {
  name: "Hedy Lamarr",
  imageUrl: "https://i.imgur.com/yXOvdOSs.jpg",
  imageSize: 90,
};

const Profile = () => {
  return (
    <>
      <h1>{user.name}</h1>
      <img
        className="avatar"
        src={user.imageUrl}
        alt={"Photo of" + user.name}
        style={{
          width: user.imageSize,
          height: user.imageSize,
        }}
      />
    </>
  );
};
const App = () => {
  return (
    <div>
      <h1>Welcome to my app</h1>
      <MyButton />
      <Profile />
    </div>
  );
};

export default App;
