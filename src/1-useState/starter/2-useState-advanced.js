import React, { useState } from "react";

const Index = () => {
  // const iniObj = {
  //   fname: "john",
  //   lname: "doe",
  // };
  function initialData() {
    return {
      fname: "john",
      lname: "doe",
    };
  }
  // const [data, setData] = useState({ fname: "john", lname: "doe" });
  const [data, setData] = useState(initialData);

  return (
    <div>
      <h1>First Name: {data.fname}</h1>
      <button onClick={() => setData({ ...data, fname: "jane" })}>
        Change First Name
      </button>
      <h1>Last Name: {data.lname}</h1>
      <button onClick={() => setData({ ...data, lname: "smith" })}>
        Change Last Name
      </button>
    </div>
  );
};
export default Index;
