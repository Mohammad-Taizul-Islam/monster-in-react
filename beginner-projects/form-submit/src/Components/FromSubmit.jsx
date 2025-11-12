import React from "react";
import "../index.css";
import { useState } from "react";
const FromSubmit = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [contact, setContact] = useState("");
  const [gender, setGender] = useState("Male");
  const [bestSubjects, setBestSubjects] = useState({
    english: true,
    maths: false,
    physics: false,
  });
  const [resumeFile, setResumeFile] = useState("");
  const [url, setUrl] = useState("");
  const [selectOption, setSelectOption] = useState("");
  const [about, setAbout] = useState("");

  const handleSubjectChange = (sub) => {
    setBestSubjects((prev) => ({
      ...prev,
      [sub]: !prev[sub],
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(
      firstName,
      lastName,
      email,
      contact,
      gender,
      selectOption,
      bestSubjects,
      resumeFile,
      url,
      about
    );
  };

  const handleReset = () => {
    setFirstName("");
    setLastName("");
    setEmail("");
    setContact("");
    setGender("male");
    setBestSubjects({
      english: true,
      maths: false,
      physics: false,
    });
    setResumeFile("");
    setUrl("");
    setSelectOption("");
    setAbout("");
  };
  return (
    <form className="container">
      <h1>Form Submission in React</h1>
      <fieldset>
        <label htmlFor="firstName">First Name*</label>
        <input
          type="text"
          id="firstName"
          name="firstName"
          value={firstName}
          onChange={(e) => {
            setFirstName(e.target.value);
          }}
          placeholder="Enter First Name"
        />
        <label htmlFor="lastName">Last Name*</label>
        <input
          type="text"
          id="lastName"
          name="lastName"
          value={lastName}
          onChange={(e) => {
            setLastName(e.target.value);
          }}
          placeholder="Enter Last Name"
        />
        <label htmlFor="email">Enter Email*</label>
        <input
          type="email"
          id="email"
          name="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          placeholder="Enter Email"
        />
        <label htmlFor="phone">Contact*</label>
        <input
          type="tel"
          id="phone"
          name="phone"
          value={contact}
          onChange={(e) => {
            setContact(e.target.value);
          }}
          placeholder="Enter Mobile number"
        />
        <label htmlFor="gender">Gender*</label>
        <input
          type="radio"
          id="male"
          name="gender"
          value="male"
          checked={gender === "male"}
          onChange={(e) => {
            setGender(e.target.value);
          }}
        />
        Male
        <input
          type="radio"
          id="female"
          name="gender"
          value="female"
          checked={gender === "female"}
          onChange={(e) => {
            setGender(e.target.value);
          }}
        />
        Female
        <input
          type="radio"
          id="other"
          name="gender"
          value="male"
          checked={gender === "male"}
          onChange={(e) => {
            setGender(e.target.value);
          }}
        />
        Others
        <label htmlFor="lang">Your best Subject</label>
        <input
          type="checkbox"
          name="lang"
          id="english"
          checked={bestSubjects.english === true}
          onChange={(e) => handleSubjectChange("english")}
        />
        English
        <input
          type="checkbox"
          name="lang"
          id="maths"
          checked={bestSubjects.maths === true}
          onChange={(e) => handleSubjectChange("maths")}
        />
        Math
        <input
          type="checkbox"
          name="lang"
          id="physics"
          checked={bestSubjects.physics === true}
          onChange={(e) => handleSubjectChange("physics")}
        />
        Physics
        <label htmlFor="file">Upload Resume*</label>
        <input
          type="file"
          name="file"
          id="file"
          onChange={(e) => setResumeFile(e.target.files[0])}
          placeholder="Enter Upload file"
          required
        />
        <label htmlFor="url">Enter URL*</label>
        <input
          type="url"
          name="url"
          id="url"
          value={url}
          onChange={(e) => setUrl(e.target.value)}
        />
        <label>Select Your Choice</label>
        <select
          name="select"
          id="select"
          value={selectOption}
          onChange={(e) => setSelectOption(e.target.value)}
        >
          <option value="" disabled selected={setSelectOption === ""}>
            Select your Ans
          </option>
          <optgroup label="Beginners">
            <option value="1">HTML</option>
            <option value="2">CSS</option>
            <option value="3">javScript</option>
          </optgroup>
          <optgroup label="Advance">
            <option value="4">React</option>
            <option value="5">Node js</option>
            <option value="6">Next.Js</option>
            <option value="7">Express</option>
            <option value="t">MongoDB</option>
          </optgroup>
        </select>
        <label htmlFor="about">About</label>
        <textarea
          name="about"
          id="about"
          value={about}
          cols={30}
          rows={10}
          onChange={(e) => setAbout(e.target.value)}
          placeholder="About Your self"
          required
        ></textarea>
        <button type="reset" value="reset" onClick={() => handleReset()}>
          Reset
        </button>
        <button type="submit" value="submit" onClick={(e) => handleSubmit(e)}>
          Submit
        </button>
      </fieldset>
    </form>
  );
};

export default FromSubmit;
