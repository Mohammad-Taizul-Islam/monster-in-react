import { useState } from "react";
import Object from "./Component/Object";

function App() {
  const [friends, setFriends] = useState(["Kabir", "Mamun", "Ripon", "Nazmul"]);
  const addOneFriend = () => setFriends([...friends, "Ruma"]);
  const removeOneFriend = () =>
    setFriends([friends.filter((f) => f !== "Kabir")]);
  const updateOneFriend = () => {
    setFriends(friends.map((f) => (f === "Mamun" ? "Mikel Mamun" : f)));
  };
  return (
    <>
    <section>
      {friends.map((friend) => (
        <li key={Math.random()}>{friend}</li>
      ))}
      <button onClick={addOneFriend}>Add A Friend</button>
      <button onClick={removeOneFriend}>Remove A Friend</button>
      <button onClick={updateOneFriend}>Update A Friend</button>
    </section>

    <section>
      <Object/>
    </section>
    </>
  );
}

export default App;
