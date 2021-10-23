import React from 'react';
import {DayPilotCalendar} from "daypilot-pro-react";

const Time = (events) => {
  
return(
<div >
            <h2> Time  </h2>
            <DayPilotCalendar  events={events}/>
</div>

);


}
export default Time