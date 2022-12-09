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
            {/* <div className="home-page">

                <div className="container">

                    <table className="table table-striped">
                        <tr className="classHeader ">
                            <th></th>
                            <th>Trip Title</th>
                            <th>Start Date</th>
                            <th>End Date</th>
                        </tr>
                        {trips.map((trip, index) => {
                            return (
                                <tr key={trip.id}>
                                    <td>{index + 1} </td>
                                    <td className="team-name w-30">
                                        <Link className="text-decoration-none text-dark"
                                            to={`/trips/${trip.id}`}>
                                            {trip.title}
                                        </Link>
                                    </td>
                                    <td>{trip.start_date}</td>
                                    <td>{trip.end_date}</td>
                                    <Link className="text-decoration-none text-dark"
                                            to={`/trips/${trip.id}`}>
                                            View Trip Destinations
                                        </Link>
                                </tr>
                            )
                        })}
                    </table>
                </div>
            </div> */}

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
                                <p class="card-text">{trip.end_date}</p>
                                <p class="card-text">{trip.start_date}</p>
                                <Link className="text-decoration-none text-dark"
                                    to={`/trips/${trip.id}`}>
                                    <h4 class="btn btn-primary" >View Trip Destinations</h4>
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