import React, { useState } from "react";
import validator from "validator";

const PasswordValidator = () => {
  const [errorMessage, setErrorMessage] = useState("");
  const validate = (value) => {
    if (
      validator.isStrongPassword(value, {
        minLength: 8,
        minLowercase: 1,
        minUppercase: 1,
        minNumbers: 1,
        minSymbols: 1,
      })
    ) {
      setErrorMessage("Is string password");
    } else {
      setErrorMessage("Is not strong Password");
    }
  };
  return (
    <div
      style={{
        marginLeft: "200px",
      }}
    >
      <pre>
        <h2>Checking Password Strength in ReactJs</h2>
        <span>Enter Password :</span>
        <input
          type="password"
          name="password"
          id="password"
          onChange={(e) => validate(e.target.value)}
        />
        <br />
        {errorMessage === "" ? null : (
          <span
            style={{
              fontWeight: "bold",
              color: "red",
            }}
          >
            {errorMessage}
          </span>
        )}
      </pre>
    </div>
  );
};

export default PasswordValidator;
