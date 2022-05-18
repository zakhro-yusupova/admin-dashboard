import Subheader from "../Subheader/Subheader";
import { Add } from "../../Assets/img/Icons/Icons";
import Todo from "../Todo/Todo";


import "./tasks.css";

function Tasks (){
  return (
    <div className="tasks">
    <Subheader title="Tasks" text="Today" btn="View all"/>
    <ul className="tasks__list">
    <li className="tasks__item">
    <p className="tasks__text">Create new task</p>
    <Add/>
    </li>
    <Todo text= "Finish ticket update" btn="URGENT" color="yellow" />
    <Todo text= "Create new ticket example" btn="NEW" color="green" />
    <Todo text= "Update ticket report" last="last" btn="DEFAULT" color="secondary" />
    </ul>
    </div>
    )
  }


  export default Tasks;