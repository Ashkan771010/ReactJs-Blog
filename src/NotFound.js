import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <div className="not-found">
            <h2>Sorry</h2>
            <p>Cannot found that page</p>
            <Link to="/">Go To Home Page</Link>
        </div>
    );
}
 
export default NotFound;