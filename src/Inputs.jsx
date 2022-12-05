import { Button } from "@progress/kendo-react-buttons";
import { Input, TextBox } from "@progress/kendo-react-inputs";
import React, { useState } from "react";
import List from "./List";

let data = JSON.parse(localStorage.getItem("data"));

const Inputs = () => {
  const [text, setText] = useState("");
  const [taskList, setTaskList] = useState(data ? data : []);
  const [editId, setEditId] = useState(null);
  const [isEditing, setIsEditing] = useState(false);

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleClick = (e) => {
    if (!isEditing) {
      setTaskList((prevList) => [
        ...prevList,
        { text, id: new Date().getTime() },
      ]);
    } else {
      setTaskList(
        taskList.map((item) => (item.id === editId ? { ...item, text } : item))
      );
      setIsEditing(false);
    }
    setText("");
  };

  const handleDelete = (id) => {
    setTaskList((prevTask) => prevTask.filter((item) => item.id !== id));
  };

  const handleEdit = (id) => {
    let item = taskList.find((item) => item.id === id);
    setText(item.text);
    setIsEditing(true);
    setEditId(id);
  };

  localStorage.setItem("data", JSON.stringify(taskList));

  return (
    <div
      style={{
        display: "grid",
        placeItems: "center",
        gap: "20px",
      }}
    >
      <div
        style={{
          display: "flex",
          gap: "20px",
          width: "100%",
          justifyContent: "center",
          padding: "10px",
          margin: "50px 0 10px",
        }}
      >
        <TextBox
          onChange={handleChange}
          value={text}
          style={{ width: "60%" }}
        />
        <Button
          themeColor={"primary"}
          onClick={handleClick}
          disabled={text.length === 0}
        >
          {!isEditing ? "Add Task" : "Edit Task"}
        </Button>
      </div>
      {taskList.length < 1 ? (
        <h2>No task </h2>
      ) : (
        <List
          list={taskList}
          handleDelete={handleDelete}
          handleEdit={handleEdit}
        />
      )}
    </div>
  );
};

export default Inputs;
