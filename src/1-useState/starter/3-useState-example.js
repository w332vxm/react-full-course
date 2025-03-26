import React from "react";

const Index = () => {
  const [show, setShow] = React.useState(true);
  const [name, setName] = React.useState("Hide");
  const handleChange = () => {
    setShow(!show);
    setName(show ? "Show" : "Hide");
  };
  return (
    <div>
      <button onClick={() => handleChange()}>{name}</button>
      {show ? (
        <div className="content">hello world</div>
      ) : (
        <div>Data Hiden</div>
      )}
    </div>
  );
};

export default Index;
