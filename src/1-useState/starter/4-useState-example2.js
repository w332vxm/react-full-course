import React, { useState } from "react";

const Index = () => {
  const [fname, setFname] = useState("Sai");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // const changeEmail = (e) => {
  //   console.log(e);
  //   setEmail(e.target.value);
  // };
  // const changeFname = (e) => {
  //   e.target.value = e.target.value.toUpperCase();
  //   setFname(e.target.value);
  // };
  // const changePassword = (e) => {
  //   setPassword(e.target.value);
  // };
  const handleInputChange = (e, name) => {
    console.log(e.target.value, name);
    if (name === "fname") {
      setFname(e.target.value);
    }
    if (name === "email") setEmail(e.target.value);
    // if (name === "email1") setPassword(e.target.value);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    let userData = {
      fname: fname,
      email: email,
      password: password,
    };
    console.log(userData);
  };
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <div className="form-content">
          <input
            type="text"
            name="fname"
            id="fname"
            placeholder="Enter your first Name"
            value={fname}
            onChange={(e) => {
              e.target.value = e.target.value.toUpperCase();
              handleInputChange(e, "fname");
            }}
          />
        </div>
        <div className="form-content">
          <input
            type="email"
            name="email"
            id="email"
            value={email}
            placeholder="Enter your email"
            onChange={(e) => handleInputChange(e, "email")}
          />
        </div>
        <div className="form-content">
          <input
            type="password"
            name="password"
            id="password"
            value={password}
            placeholder="Enter your password"
            // onChange={(e) => handleInputChange(e, "email1")}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default Index;
