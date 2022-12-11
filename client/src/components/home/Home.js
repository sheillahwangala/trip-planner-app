import "./home.css"

function Home() {
    return (
        <div className="home">
            <h1>Out 'n' About</h1>
            <div className="bottom-home" >
                <p>The best of memories are appreciated by the eyes, captured by the lense and saved in <b>Moments.</b></p>
                <img src="https://wallpaperaccess.com/full/3497075.jpg" alt="road" width="550px" />
            </div>
            <hr></hr>
            <div className="footer" >
                <ul><li>Plan Trip</li></ul>
                <ul><li>Capture Memories</li></ul>
                <ul><li>Save Moments</li></ul>

            </div>
            <div className="navbar navbar-expand-sm navbar-dark bg-info px-5" ><br></br>
                <h6 className="navbar-nav ms-auto" >***Terms and Conditions apply.*** </h6>
            </div>

        </div>
    )
}
export default Home;