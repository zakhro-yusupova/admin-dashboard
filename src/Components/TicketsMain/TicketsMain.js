import Item from "../TicketsItem";
import "./tickets-main.css";
import Tom from "../../Assets/img/images/tom.png";
import Mat from "../../Assets/img/images/matt.png";
import Robert from "../../Assets/img/images/robert.png";
import Bale from "../../Assets/img/images/bale.png";
import Henry from "../../Assets/img/images/henry.png";
import Chris from "../../Assets/img/images/chris.png";
import Sam from "../../Assets/img/images/sam.png";
import Steve from "../../Assets/img/images/steve.png";
import Vector from "../../Assets/img/images/Vector.png";
import TicketsBottom from "../TicketsBottom/TicketsBottom";
import Pagination from "../../Assets/img/images/pagination.png";

const TicketsMain = () => {
  return (
    <div>
    <div className="tickets-info">
    <strong className="text">Ticket details</strong>
    <div>
    <strong className="text">Customer name</strong>
    <strong className="text">Date</strong>
    <strong className="text">Priority</strong>
    </div>
    </div>
    <Item avatar={Tom} text="Contact Email not Linked" status="Updated 1 day ago" name="Tom Cruise" day="on 24.05.2019" time="May 26, 2019" hour="6:30 PM" state="High" vector={Vector} />

    <Item avatar={Mat} text="Adding Images to Featured Posts" status="Updated 1 day ago" name="Matt Damon" day="on 24.05.2019" time="May 26, 2019" hour="8:00 AM" state="Low" color="yellow" vector={Vector} />

    <Item avatar={Robert} text="When will I be charged this month?" status="Updated 1 day ago" name="Robert Downey" day="on 24.05.2019" time="May 26, 2019" hour="7:30 PM" state="High" vector={Vector} />

    <Item avatar={Bale} text="Payment not going through" status="Updated 2 day ago" name="Christian Bale" day="on 24.05.2019" time="May 25, 2019" hour="5:00 PM" state="Normal" color="green" vector={Vector} />

    <Item avatar={Henry} text="Unable to add replies" status="Updated 2 day ago" name="Henry Cavil" day="on 24.05.2019" time="May 25, 2019" hour="4:00 PM" state="High" vector={Vector} />

    <Item avatar={Chris} text="Downtime since last week" status="Updated 3 day ago" name="Chris Evans" day="on 23.05.2019" time="May 25, 2019" hour="2:00 PM" state="Normal" color="green" vector={Vector} />

    <Item avatar={Sam} text="Referral Bonus" status="Updated 4 day ago" name="Sam Smith" day="on 22.05.2019" time="May 25, 2019" hour="11:30 PM" state="Low" color="yellow" vector={Vector} />

    <Item avatar={Steve} text="How do I change my password?" status="Updated 6 day ago" name="Steve Rogers" day="on 21.05.2019" time="May 24, 2019" hour="1:00 PM" state="Normal" color="green" vector={Vector} />

<TicketsBottom icon={Pagination}/>
    </div>
    )
  }

  export default TicketsMain;