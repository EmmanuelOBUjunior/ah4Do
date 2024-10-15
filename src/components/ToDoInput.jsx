import { useState } from "react";

export default function TodoInput(props) {
  const { handleAddTodo, newTodoValue, setnewTodoValue } = props;
  

  return (
    <header>
      <input
        value={newTodoValue}
        onChange={(e) => {setnewTodoValue(e.target.value)}}
        type="text"
        placeholder="Enter todo here...."
      />
      <button
        onClick={() => {
          handleAddTodo(newTodoValue);
          setnewTodoValue('')
        }}
      >
        Add
      </button>
    </header>
  );
}
