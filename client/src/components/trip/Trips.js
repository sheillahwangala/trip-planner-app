import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import AddTrip from "./addTrip";
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
            <div className="home-page">

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
                                </tr>
                            )
                        })}
                    </table>
                </div>
            </div>

            <AddTrip/>

        </div>
    )

}
export default Trips