import React, { useState } from "react";
import Button from "@material-ui/core/Button";
import AddIcon from "@material-ui/icons/Add";
import Comp from "./Comp";
const ToDoList = () => {
  const [item, setItem] = useState("");
  const [newitem, setNewItem] = useState([]);

  const itemEvent = (event) => {
    setItem(event.target.value);
  };

  const list = () => {
    setNewItem((prevValue) => {
      return [...prevValue, item];
    });
    setItem(" ");
  };
  return (
    <>
      <div className="main_div">
        <div className="center_div">
          <br />
          <h1>To Do List</h1>
          <br />
          <input
            type="text"
            placeholder="Add an Item"
            onChange={itemEvent}
            value={item}
          />
          <Button className="newBtn" onClick={list}>
            <AddIcon />
          </Button>
          <br />
          <ol>
            {newitem.map((val, index) => {
              return <Comp key={index} text={val} />;
            })}
          </ol>
        </div>
      </div>
    </>
  );
};
export default ToDoList;
