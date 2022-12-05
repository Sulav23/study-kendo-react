import { Button } from "@progress/kendo-react-buttons";
import { Input, TextBox } from "@progress/kendo-react-inputs";
import React, { useState } from "react";
import List from "./List";

const Inputs = () => {
  const [text, setText] = useState("");
  const [taskList, setTaskList] = useState([]);

  const handleChange = (e) => {
    setText(e.target.value);
  };

  const handleClick = (e) => {
    setTaskList((prevList) => [
      ...prevList,
      { text, id: new Date().getTime() },
    ]);
    setText("");
  };

  const handleDelete = (e, id) => {
    setTaskList((prevTask) => prevTask.filter((item) => item.id !== id));
  };

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
        <Button themeColor={"primary"} onClick={handleClick}>
          Add Task
        </Button>
      </div>
      <List list={taskList} handleDelete={handleDelete} />
    </div>
  );
};

export default Inputs;
