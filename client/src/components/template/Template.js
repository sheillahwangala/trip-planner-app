import NavBar from "../navbar/NavBar";

function Template ({children}) {
    return (
        <div className="template">
            <NavBar />
            {children}
        </div>
    );
};
export default Template;