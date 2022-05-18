import Tickets from "../Tickets/Tickets";
import Tasks from "../Tasks/Tasks";

import "./bottom.css";

function Bottom (){
  return (
<div className="bottom">
  <Tickets/>
  <Tasks/>
</div>
  )
}

export default Bottom;