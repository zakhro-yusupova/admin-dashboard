import "./todo.css";

function Todo ({text, btn, color, last}) {

  return (
    <li className="todo">
    <p className={`todo__text ${last}`}> {text} </p>
    <button className={`todo__btn ${color}`}> {btn} </button>
    </li>
    )
  }

  export default Todo;