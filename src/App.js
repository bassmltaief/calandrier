import React from "react";
import "react-big-calendar/lib/css/react-big-calendar.css";
import "react-datepicker/dist/react-datepicker.css";
import "react-time-picker/dist/TimePicker.css";
import "react-clock/dist/Clock.css";
import "./App.css";
import Calandrier from "./component/Calandrier";
import 'antd/dist/antd.css';



function App() {

    return (
        <div className="App">
           <Calandrier/>
        </div>
    );
}

export default App;
