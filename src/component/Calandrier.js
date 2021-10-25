import format from "date-fns/format";
import getDay from "date-fns/getDay";
import parse from "date-fns/parse";
import startOfWeek from "date-fns/startOfWeek";
import React, {useState} from "react";
import {Calendar, dateFnsLocalizer} from "react-big-calendar";
import "react-big-calendar/lib/css/react-big-calendar.css";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import {Modal, Button} from 'antd';
import moment from 'moment';
import TimePicker from 'react-time-picker';
import Events from "../Utils/Events";

const locales = {
    "ar-TN": require("date-fns/locale/ar-TN"),
};

const localizer = dateFnsLocalizer({
    format,
    parse,
    startOfWeek,
    getDay,
    locales,
    
});

const Calender = () => {
    const [isModalVisible, setIsModalVisible] = useState(false);

    const showModal = () => {
        setIsModalVisible(true);
    };

    const handleOk = () => {
        setIsModalVisible(false);
        setAllEvents([...allEvents, newEvent]);
    };

    const handleCancel = () => {
        setIsModalVisible(false);
    };
    const [newEvent, setNewEvent] = useState({title: "", start: "", end: "", backColor:""});
    const [allEvents, setAllEvents] = useState(Events);


    return (
        <div style={{width: '40%'}}>
            <h1>Calendar</h1>
            <Button onClick={showModal}>Add New Event</Button>
           
            <Modal title="Add New Event" visible={isModalVisible} onOk={handleOk} onCancel={handleCancel}>
                <div>
                    <div style={{display: 'flex', alignItems: 'center'}}>
                        <h5 style={{flex: 1}}>Event Titre</h5>
                        <input type="text" placeholder="Add Title" style={{flex: 3}} value={newEvent.title}
                               onChange={(e) => setNewEvent({...newEvent, title: e.target.value})}/>
                    </div>
                    <div style={{display: 'flex', alignItems: 'center',justifyContent: 'space-between'}}>
                        <div style={{display: 'flex', alignItems: 'center',justifyContent: 'space-between'}}>
                            <h5>Start Date</h5>
                            <DatePicker placeholderText="Start Date" style={{marginRight: "10px"}}
                                        selected={newEvent.start}
                                        onChange={(start) => setNewEvent({...newEvent, start})}/>
                        </div>
                        <div style={{display: 'flex', alignItems: 'center',justifyContent: 'space-between'}}>
                            <h5>End Date</h5>
                            <DatePicker placeholderText="End Date" selected={newEvent.end}
                                        onChange={(end) => setNewEvent({...newEvent, end})}/>
                        </div>
                    </div>
                    <div style={{display: 'flex', justifyContent: 'space-between'}}>
                        <div style={{display: 'flex', alignItems: 'center',justifyContent: 'space-between'}}>
                            <h5>Time Start</h5>
                            <TimePicker onChange={(timeStart) => setNewEvent({...newEvent, timeStart})}
                                        value="01:00:00"/>
                        </div>
                        <div style={{display: 'flex', justifyContent: 'space-between'}}>
                            <h5>Time End</h5>
                            <TimePicker onChange={(timeEnd) => setNewEvent({...newEvent, timeEnd})}
                                        value="01:00:00"/>
                                
                        </div>
                    </div>
                    <div style={{display: 'flex', alignItems: 'center'}}>
                        <h5 style={{flex: 1}}>Color</h5>
                        <input className="input" style={{flex: 3}} type="color" value={newEvent.Color}
                                     onChange={(e) => setNewEvent({...newEvent, Color: e.target.value})} />
                                
                    </div>
                </div>
            </Modal>
            <div>
        
                <Calendar localizer={localizer} events={Events} startAccessor="start" endAccessor="end"
                      style={{height: 400, margin: "50px"}}  defaultTimeStart={moment().add(-12, 'hour')}
                      defaultTimeEnd={moment().add(12, 'hour')}/>
             </div>
        </div>
    );
}
export default Calender