import EmptyList from "./EmptyList";
import TodoCard from "./ToDoCard";

export default function TodoList(props) {
  const { todos } = props;
  // console.log(todos.length)
  return (
    <>
      {todos.length >= 1 ? (
        <ul className="main">
          {todos.map((todo, index) => {
            return (
              <TodoCard {...props} key={index} todo={todo} index={index} />
            );
          })}
        </ul>
      ) : (
        <EmptyList />
      )}
    </>
  );
}
