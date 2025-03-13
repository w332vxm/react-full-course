import React, { useState } from "react";

const UseStateExample = () => {
  const initialArray = [
    {
      id: 1,
      fName: "emma",
      lName: "smith",
      age: 25,
    },
    {
      id: 2,
      fName: "john",
      lName: "doe",
      age: 30,
    },
    {
      id: 3,
      fName: "Sai",
      lName: "Kumar",
      age: 35,
    },
  ];
  const [data, setData] = useState(initialArray);
  console.log(data);
  const handleDelete = (id) => {
    console.log("delete", id);
    const newData = data.filter((item) => item.id !== id);
    console.log(newData);
    setData(newData);
  };
  return (
    <div>
      <ul>
        {data.map((eactItem, index) => {
          const { fName, lName, age, id } = eactItem;
          return (
            <li key={index}>
              <div>
                First Name: <strong>{fName}</strong>
              </div>{" "}
              <div>Last Name: {lName}</div>
              <div> Age is :{age} </div>
              <button onClick={() => handleDelete(id)}>Delete</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default UseStateExample;
