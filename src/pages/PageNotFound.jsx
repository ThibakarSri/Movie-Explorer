import { Link } from "react-router-dom";
import notfound from "../assets/notFound.png";

export const PageNotFound = () => {
  return (
    <div className="container">
      <img src={notfound} className="img-fluid" />
      <p className="text-center">
        <Link to="/" className="btn btn-danger">
          Go to Home Page
        </Link>
      </p>
    </div>
  )
};

