import React from "react";

const List = ({ list }) => {
  return list.map((item, index) => (
    <div className="k-listview-item" key={index}>
      {item}
    </div>
  ));
};

export default List;
