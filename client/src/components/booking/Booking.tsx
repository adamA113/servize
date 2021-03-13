import React, { useEffect, useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import FontAwesome from 'react-fontawesome';
// import './Booking.css'
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";


// import DateTimePicker from 'react-bootstrap-date-time-picker';
import DateTimePicker from 'react-datetime-picker';

// import 'react-datetimepicker-bootstrap';
// import DatePicker from react-datepicker;

export default function Booking() {
	const [startDate, setStartDate] = useState(new Date());
    return (
		<div className="container">
            <div className="row">
                <div className="col-md-6">
                    <div className="well-block">
                        <div className="well-title">
                            <h2> Book a ServiceProvider</h2>
                        </div>
                        <form>
                            
                            <div className="row">
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label className="control-label" htmlFor="name">Name</label>
                                        <input id="name" name="name" type="text" placeholder="Name" className="form-control input-md"></input>
                                    </div>
                                </div>
								 <div className='col-md-6'>
                                    {/* <div className="form-group">
                                        <label className="control-label" htmlFor="name">ServiceProvider Name</label>
                                        <input id="ServiceProvider Name" name="ServiceProvider Name" type="text" placeholder="ServiceProvider Name" className="form-control input-md"></input>
                                    </div> */}
                                </div>
                                
								<div className="col-md-6">
                                    <div className="form-group">
                                        <label className="control-label" htmlFor="Phone Number">Phone Number</label>
                                        <input id="Phone Number" name="Phone Number" type="number" placeholder="Phone Number" className="form-control input-md"></input>
                                    </div>
                                </div>
                                
                                {/* <div className="col-md-6">
                                    <div className="form-group">
                                        <label className="control-label" htmlFor="email">Email</label>
                                        <input id="email" name="email" type="text" placeholder="E-Mail" className="form-control input-md"></input>
                                    </div>
                                </div> */}
                              
                                <div className="col-md-6">
                                    <div className="form-group">
                                        <label className="control-label" htmlFor="date">Preferred Date </label>
                                        {/* <input id="date" name="date" type="text" placeholder="dd/mm/yyyy" className="form-control input-md"></input> */}
                                        <DatePicker selected={startDate} onChange={date => setStartDate(date)} />

                              
        
      
                                    </div>
                                </div>
                               

                                <div className="col-md-12">
                                    <div className="form-group">
                                        <label className="control-label" htmlFor="appointmentfor">Booking For </label>
                                        <input id="appointmentfor" name="appointmentfor" className="form-control">
 
                                        </input>
                                    </div>
                                   </div>
                                 <div className="col-md-12">
                                    <div className="form-group">
                                        <button id="singlebutton" name="singlebutton" className="btn btn-default">Make A Booking</button>
                                    </div>
                                </div>
                            </div>
                        </form>
                       
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="well-block">
                        <div className="well-title">
                            <h2>Why Booking with Us</h2>
                        </div>
                        <div className="feature-block">
                            <div className="feature feature-blurb-text">
                                <h4 className="feature-title">Experienced Staff Available</h4>
                                
                            </div>
                            <div className="feature feature-blurb-text">
                                <h4 className="feature-title">Low Price & Fees</h4>
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
 

    )
}
