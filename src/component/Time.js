import React from 'react';
import {DayPilotCalendar} from "daypilot-pro-react";
import Events from '../Utils/Events'
const Time = () => {
  
return(
<div style={{width: '60%'}}>
            <h2> Time  </h2>
            <DayPilotCalendar  events={Events} />
</div>

);


}
export default Time