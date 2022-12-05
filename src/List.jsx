import { Button } from "@progress/kendo-react-buttons";
import React from "react";

const List = ({ list, handleDelete, handleEdit }) => {
  return list.map((item) => (
    <div
      className="k-listview-item k-display-flex"
      key={item.id}
      style={{
        width: "70%",
        padding: "10px",
        alignItems: "center",
        justifyContent: "space-between",
        border: "2px solid #333",
        borderRadius: "6px",
      }}
    >
      {item.text}
      <div
        className="k-display-flex"
        style={{
          gap: "10px",
          justifyContent: "space-between",
        }}
      >
        <Button icon="edit" onClick={() => handleEdit(item.id)} />
        <Button icon="delete" onClick={() => handleDelete(item.id)}></Button>
      </div>
    </div>
  ));
};

export default List;
