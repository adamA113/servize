import React from 'react';
import * as ReactDOM from "react-dom";
import { Inject, ScheduleComponent, Day, Week, Month, Agenda, EventSettingsModel } from '@syncfusion/ej2-react-schedule';
import { DataManager, WebApiAdaptor } from '@syncfusion/ej2-data';
// import *  dataSource from './datasource.json';
import { extend } from '@syncfusion/ej2-base';

// import { render } from '@testing-library/react';
// import './Schedule.css';
// import { Data } from '@syncfusion/ej2-react-grids';




function Schedule() {
    // public render() {

    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    let localData: EventSettingsModel = {
        dataSource: [{
            // Id: Number,
            // Subject: String,
            EndTime: new Date(2019, 0, 11, 6, 30),
            StartTime: new Date(2019, 0, 11, 4, 0),
            // ResourceID: Number
        }]
    };

    // const remoteData = new DataManager({
    //     url: 'https://js.syncfusion.com/demos/ejservices/api/Schedule/LoadData',
    //     adaptor: new WebApiAdaptor,
    //     crossDomain: true
    // });

    // const render(){
    return (
        <ScheduleComponent height='400px' width='600' currentView='Month' selectedDate={new Date(2020, 0, 11)} eventSettings={localData} >
            <Inject services={[Day, Week, Month, Agenda]} />
        </ ScheduleComponent >
    )
}

export default Schedule;
