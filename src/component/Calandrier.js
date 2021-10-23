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

const events = [
    {
        title: "Big Meeting",
        allDay: true,
        start: (2021, 9,22,17,30,0),
        end: new Date(2021, 9, 22,"6:00 PM"),

    },
    {
        title: "Vacation",
        start: new Date(2021, 9, 7),
        end: new Date(2021, 9, 10),
    },
    {
        title: "Conference",
        start: new Date(2021, 9, 20),
        end: new Date(2021, 9, 23),
    },
];

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
    const [newEvent, setNewEvent] = useState({title: "", start: "", end: "", timeStart: "", timeEnd: ""});
    const [allEvents, setAllEvents] = useState(events);


    return (
        <div className="App">
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
                </div>
            </Modal>

            <Calendar localizer={localizer} events={allEvents} startAccessor="start" endAccessor="end"
                      style={{height: 400, margin: "50px"}}/>
        </div>
    );
}
export default Calender