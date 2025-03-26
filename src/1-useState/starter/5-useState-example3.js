import react, { useState } from "react";

const Index = () => {
  const tempList = [
    {
      text: "learn react",
      id: 1,
    },
    { text: "Hello World", id: 2 },
  ];
  const [list, setList] = useState(tempList);
  const [message, setMessage] = useState({ text: "", id: "" });
  const [editingItem, setEditingItem] = useState({
    id: "",
    isediting: false,
  });
  const changeMessage = (e) => {
    setMessage({ ...message, text: e.target.value });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    let newTodo = {
      text: message.text,
      id: new Date().getTime().toString(),
    };
    setList([...list, newTodo]);
    setMessage({ text: "", id: "" });
    console.log(newTodo);
  };
  const handleMessageDelete = (id) => {
    let newList = list.filter((item) => item.id !== id);
    console.log(newList);
    setList(newList);
  };
  const changeEditState = (id) => {
    setEditingItem({
      ...editingItem,
      id: id,
      isediting: true,
    });
    let editItem = list.find((item) => item.id === id);
    setMessage({ ...message, text: editItem.text, id: editItem.id });
  };
  const handleEdit = (e) => {
    e.preventDefault();
    console.log("Before editing", list);
    let newTodos = list.map((item) => {
      if (item.id === editingItem.id) {
        return { text: message.text, id: editingItem.id };
      } else {
        return item;
      }
    });
    console.log("After editing", newTodos);
    setList(newTodos);
    setMessage({ text: "", id: "" });
    setEditingItem({ id: "", isediting: false });
  };

  return (
    <div>
      <form>
        <input
          type="text"
          name="message"
          id="message"
          placeholder="enter some text"
          value={message.text}
          onChange={changeMessage}
        />
        {editingItem.isediting ? (
          <button onClick={handleEdit} type="submit">
            Edit
          </button>
        ) : (
          <button onClick={handleSubmit} type="submit">
            Add
          </button>
        )}
      </form>
      <hr />

      {list.length === 0 && <h1>There is no item to display</h1>}
      <ul>
        {list.map((eachItem) => {
          const { text, id } = eachItem;
          return (
            <li key={id}>
              <span>{text}</span>
              <button onClick={() => changeEditState(id)}>edit</button>
              <button onClick={() => handleMessageDelete(id)}>delete</button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default Index;
