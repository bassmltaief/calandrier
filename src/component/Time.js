import React from 'react';
import {DayPilotCalendar} from "daypilot-pro-react";
import Events from '../Utils/Events'
const Time = () => {
  
return(
<div >
            <h2> Time  </h2>
            <DayPilotCalendar  events={Events} titre={Events.titre} />
</div>

);


}
export default Time