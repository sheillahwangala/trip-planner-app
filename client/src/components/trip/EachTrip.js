import { Link, useParams } from 'react-router-dom';
function EachTrip() {
    const params = useParams();
    const [tripId, setTripId] = useState(Number(params.id));
    const [trips, setTrips] = useState([]);
    const [title, setTitle] = useState([]);

    useEffect(() => {
        fetch("/trips")
        .then((response) => response.json())
        .then((data) => {
            setTrips(data);
        });
    });

    const showTrip = trips.map(
        (trip) => 
        trip.id === parseInt(params.id) && (
            <div>
                
            </div>
        )
    )

}