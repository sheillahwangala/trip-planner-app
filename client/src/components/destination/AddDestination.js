import { useState } from "react";

function AddDestination({ tripId }) {
    const [name, setName] = useState("");
    const [location, setLocation] = useState("");
    const [notes, setNotes] = useState("");
    const [photos, setPhotos] = useState("");
    const [destination, setDestination] = useState([])

    const uploadPhoto = (files) => {
        const formData = new FormData();
        formData.append("file", files[0]);
        formData.append("upload_preset", "e2e6z2lx");
        fetch("https://api.cloudinary.com/v1_1/dakiak4mc/image/upload", {
            method: "POST",
            body: formData,
        })
            .then((response) => response.json())
            .then((data) => {
                setPhotos(data.secure_url);
            });
    };

    const createDestination = (e) => {
        e.preventDefault();
        fetch("/destinations", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                trip_id: tripId,
                name: name,
                location: location,
                notes: notes,
                photos: photos,
            }),
        })
            .then((response) => response.json())
            .then((data) => setDestination(data));
    };

    return (
        <div className="div-form">
            <h4>Add Destination</h4>
            <div>
                <input type="text"
                    className="mt-2 form-control"
                    placeholder="Destination_name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                />
                <input type="text"
                    className="mt-2 form-control"
                    placeholder="location"
                    value={location}
                    onChange={(e) => setLocation(e.target.value)}
                />
                <input type="text"
                    className="mt-2 form-control"
                    placeholder="notes"
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                />
                <input type="file"
                    className="mt-2 form-control"
                    placeholder="photos"
                    id="file-selector"
                    onChange={(e) => {
                        uploadPhoto(e.target.value)
                    }}
                />
                <button
                    className="my-2 btn btn-primary"
                    type="submit"
                    onClick={createDestination}
                >
                    Add Destination
                </button>
            </div>
        </div>
    )
}
export default AddDestination;