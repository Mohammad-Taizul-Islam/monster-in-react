import React, { useState } from "react";

const Form = () => {
  const [person, setPerson] = useState({
    firstName: "Barbara",
    lastName: "Hepworth",
    email: "abc@gmail.com",
  });

  const handleFirstNameChange = (e) =>{
    setPerson({
      ...person,
      firstName : e.target.value
    })
  }

   const handleLastNameChange = (e) =>{
    setPerson({
      ...person,
      lastName : e.target.value
    })
  }

   const handleEmailChange = (e) =>{
    setPerson({
      ...person,
      email : e.target.value
    })
  }



  return (
    <div>
      <label>
        First name :
        <input
          type="text"
          value={person.firstName}
          onChange={handleFirstNameChange}
        />
      </label>
      <label>
        Last name :
        <input
          type="text"
          value={person.lastName}
          onChange={handleLastNameChange}
        />
      </label>
      <label>
        First name :
        <input type="email" value={person.email} onChange={handleEmailChange} />
      </label>
      <p>
        {person.firstName} {person.lastName} {person.email}{" "}
      </p>
    </div>
  );
};

export default Form;
