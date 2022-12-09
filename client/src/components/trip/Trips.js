import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AddTrip from "./AddTrip";
import "./trips.css";

function Trips() {
    const [trips, setTrips] = useState([]);

    useEffect(() => {
        fetch("/trips")
            .then((response) => response.json())
            .then((data) => setTrips(data));
    }, []);

    return (
        <div>
            <h5 className="moments" >My Moments...</h5>

            <div className="trip-container" >
                {trips.map((trip) => {
                    return (
                        <div className="card" >
                            <div className="card-body">
                                
                                <Link className="text-decoration-none text-dark"
                                    to={`/trips/${trip.id}`}>
                                        <h5 className="card-title">{trip.title}</h5>
                                    
                                </Link>
                                <img src="https://easternvacations-kenya.com/wp-content/uploads/2016/08/Naivasha-national-park-Photo-Evacations.jpeg" alt="trip" />
                                <p className="card-text">{trip.end_date}</p>
                                <p className="card-text">{trip.start_date}</p>
                                <Link className="text-decoration-none text-dark"
                                    to={`/trips/${trip.id}`}>
                                    <h4 className="btn btn-primary" >View Trip Destinations</h4>
                                </Link>
                            </div>
                        </div>
                    )
                })}
            </div>

            <AddTrip />

        </div>
    )

}
export default Trips