import Requests from "../Requests/Requests";
import Subheader from "../Subheader/Subheader"
import Request from "../Requests/Requests"


import "./tickets.css";

function Tickets (){
  return (
    <div className="tickets">
    <Subheader title="Unresolved tickets" text="Group: Support" btn="View details"/>
    <ul className="tickets__list">
      <Request text="Waiting on Feature Request" num="4238" />
      <Request text="Awaiting Customer Response" num="1005" />
      <Request text="Awaiting Developer Fix" num="914" />
      <Request text="Pending" num="281" border="none"/>
    </ul>
    </div>
    )
  }


  export default Tickets;