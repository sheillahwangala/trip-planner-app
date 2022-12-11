import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import AddDestination from "../destination/AddDestination";
import Destinations from "../destination/Destination";

function EachTrip() {
    const params = useParams();
    const [tripId, setTripId] = useState(Number(params.id));
    const [trips, setTrips] = useState([]);
    const [title, setTitle] = useState("");
    const [start_date, setStart_date] = useState("");
    const [end_date, setEnd_date] = useState("");

    useEffect(() => {
        fetch("/trips/")
            .then((response) => response.json())
            .then((data) => {
                setTrips(data);
            });
    })
    const showTrip = trips.map((trip) =>
        trip.id === parseInt(params.id) && (
            <div>
                <div className="d-flex justify-content-evenly">
                    <div className="d-flex flex-column justify-content-center">
                        <h3>{trip.title} </h3>
                        <img className="rounded-circle" src="" alt="trip img" height="200px" />
                    </div>
                    <div>
                        <h5>Start Date: {trip.start_date} </h5>
                        <h5>End Date: {trip.end_date} </h5>
                    </div>
                </div>
                {trip.destinations.length > 0 && (
                    <h5 className="text-center text-decoration-underline">
                        Destinations visited during the {trip.title} trip;
                    </h5>
                )}

                {trip.destinations.length > 0 ? (
                    <div>
                        {trip.destinations.map((destination) => (
                            <div className="d-flex flex-column justify-content-center border border-2  rounded-3 m-2 p-2 each-player-div">

                                <h2 className="text-center">{destination.name}</h2>
                                <button type="button"
                                    className="btn btn-danger btn-sm"
                                    onClick={(e) => {
                                        e.preventDefault();
                                        fetch("/destinations/:id", {
                                            method: "DELETE",
                                        });
                                    }}
                                >
                                    Delete
                                </button>
                            </div>

                        ))}
                    </div>
                ) : (
                    <div>
                        <h4 className="text-center text-decoration-underline" >
                            No destinations for {trip.title}
                        </h4>
                    </div>
                )}
            </div>
        )
    );

    const editTrip = (e) => {
        e.preventDefault();
        fetch("/trips/:id", {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                title: title,
                start_date: start_date,
                end_date: end_date,
            }),
        });
    };

    const editTripForm = (
        <div className="d-flex flex-column mx-2 justify-content-center" >
            <h4 className="text-center" >Edit Trip Data</h4>
            <label for="trip title" >Trip Title</label>
            <input className="score-input"
                type="text"
                name="title"
                placeholder="title"
                onChange={(e) => setTitle(e.target.value)}
                value={title}
            />

            <label for="start_date" >Start Date</label>
            <input className="score-input"
                type="text"
                name="start_date"
                placeholder="start_date"
                onChange={(e) => setStart_date(e.target.value)}
                value={start_date}
            />

            <label for="end_date" >End Date</label>
            <input className="score-input"
                type="text"
                name="end_date"
                placeholder="end_date"
                onChange={(e) => setEnd_date(e.target.value)}
                value={title}
            />

            <button
                type="button"
                onClick={editTrip}
                className="btn btn-primary my-1"
            >
                Update Trip
            </button>
        </div>
    );

    return (
        <div>
            {showTrip}
            <div className="d-flex  justify-content-evenly">
                {editTripForm}
                <AddDestination tripId={tripId} />
            </div>
        </div>
    );


}
export default EachTrip;