import { useEffect, useState } from "react";
import TodoInput from "./components/ToDoInput";
import TodoList from "./components/ToDoList";

function App() {
  const [todos, setTodos] = useState([
    "Go to the gym",
    "Buy some groceries",
    "Pick up the kids from school",
  ]);

  useEffect(() => {
    if(!localStorage) return

    let localTodos = localStorage.getItem('todos')
    if(!localTodos) return

    localTodos = JSON.parse(localTodos).todos
    setTodos(localTodos)
  },[])
  

  const [newTodoValue, setnewTodoValue] = useState("");

  function persistData(newTodo){
    localStorage.setItem('todos', JSON.stringify({todos:newTodo}))
  }

  function handleAddTodo(newTodo) {
    const newTodoList = [...todos, newTodo];
    persistData(newTodoList)
    setTodos(newTodoList);
  }

  function handleDeleteTodo(index) {
    const newTodoList = todos.filter((todo, todoindex) => {
      return todoindex !== index;
    });
    persistData(newTodoList)
    setTodos(newTodoList);
  }

  function handleEditTodo(index) {
    const valueToEdit = todos[index];
    setnewTodoValue(valueToEdit);
    handleDeleteTodo(index);
  }

  return (
    <div>
      <TodoInput
        handleAddTodo={handleAddTodo}
        newTodoValue={newTodoValue}
        setnewTodoValue={setnewTodoValue}
      />
      <section className="entryContainer" >
      <TodoList
        handleEditTodo={handleEditTodo}
        handleDeleteTodo={handleDeleteTodo}
        todos={todos}
      />
      </section>
    </div>
  );
}

export default App;
