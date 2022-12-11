import { useEffect, useState } from "react";

function Destinations() {
    const [destinations, setDestinations] = useState([]);

    useEffect(() => {
        fetch("/destinations")
            .then((response) => response.json())
            .then((data) => setDestinations(data))
    }, []);

    

    return (
        <div>
            {destinations.map((destination) => (
                <div className="card" >
                    <div className="card-body">
                        <h3>{destinations.name} </h3>
                        <img src="https://media.tacdn.com/media/attractions-splice-spp-674x446/0b/39/82/10.jpg" alt="destination" width="200px" />
                        <p className="card-text">{destinations.location}</p>
                        <p className="card-text">{destinations.notes}</p>
                        <p className="card-text">{destinations.photos}</p>

                    </div>
                </div>

            ))}
        </div>
    )
}
export default Destinations;