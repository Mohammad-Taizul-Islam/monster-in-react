import React, { useState } from "react";
import '../index.css'

const Joke = () => {
  const [joke, setJoke] = useState("");
  const fetchApi = () => {
    fetch("https://sv443.net/jokeapi/v2/joke/Programming?type=single")
      .then((res) => res.json())
      .then((data) => setJoke(data.joke));
  };

  return (
    <div className="joke-container">
      <h1>Joke Generator Using React And Joke API</h1>
      <div className="joke">
        <button onClick={fetchApi}>generate jokes</button>
        <p>{joke}</p>
      </div>
    </div>
  );
};

export default Joke;
