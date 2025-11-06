import React from "react";

const Person = ({ name, age, isMarried, hobbies }) => {
  return (
    <div>
      <h1>Person Details :</h1>
      <h2>Name : {name}</h2>
      <h3>Age : {age}</h3>
      <h4>Is married : {isMarried}</h4>
      <h5>
        Hobbies :{" "}
        {hobbies.map((h) => (
          <ul key={Math.random}>
            <li>{h}</li>
          </ul>
        ))}
      </h5>
    </div>
  );
};

export default Person;
