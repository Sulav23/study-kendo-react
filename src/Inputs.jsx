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
    setTaskList((prevList) => [...prevList, text]);
    setText("");
  };

  return (
    <div>
      <TextBox
        onChange={handleChange}
        value={text}
        style={{ margin: "100px" }}
      />
      <Button themeColor={"primary"} onClick={handleClick}>
        Add Task
      </Button>
      <List list={taskList} />
    </div>
  );
};

export default Inputs;
