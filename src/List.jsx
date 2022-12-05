import { Button } from "@progress/kendo-react-buttons";
import React from "react";

const List = ({ list, handleDelete }) => {
  return list.map((item) => (
    <div
      className="k-listview-item"
      key={item.id}
      style={{
        width: "70%",
        padding: "10px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
        border: "2px solid #333",
        borderRadius: "6px",
      }}
    >
      {item.text}
      <Button icon="delete" onClick={(e) => handleDelete(e, item.id)}></Button>
    </div>
  ));
};

export default List;
