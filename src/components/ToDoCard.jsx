export default function TodoCard(props) {
  const {handleDeleteTodo, handleEditTodo, index} = props

  return (
    <li className="todoItem">
          <p>{props.todo}</p>
          <div className="actionsContainer">
            <button onClick={()=>{handleEditTodo(index)}}>
            <i className="fa-solid fa-file-pen"></i>
            </button>
            <button onClick={()=> handleDeleteTodo(index)}>
            <i className="fa-solid fa-trash-arrow-up"></i>
            </button>
          </div>
    </li>
  )
}
