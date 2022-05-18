import Response from "../Response/Response";

import "./trends.css";

function Trends (){
  return (

    <div className="trends">
    <div className="trends__left">
    <div className="trends__inner">
    <h2 className="trends__title">Today’s trends</h2>
    <time className="trends__time" dateTime="2019-05-25 09:41">as of 25 May 2019, 09:41 PM</time>
    </div>
    <div className="trends__day">
    <p className="day">Today</p>
    <p className="day1">Yesterday</p>
    </div>
    </div>
    <ul className="trends__list">
    <Response text="Resolved" num="449"/>
    <Response text="Received" num="426"/>
    <Response text="Average first response time" num="33m"/>
    <Response text="Average response time" num="3h 8m"/>
    <Response text="Resolution within SLA" num="94%"/>
    </ul>
    </div>

    )
  }

  export default Trends;