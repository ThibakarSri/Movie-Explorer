// import { Link } from "react-router-dom";
// import notfound from "../assets/notFound.png";

// export const PageNotFound = () => {
//   return (
//     <div className="container">
//       <img src={notfound} className="img-fluid" />
//       <p className="text-center">
//         <Link to="/" className="btn btn-danger">
//           Go to Home Page
//         </Link>
//       </p>
//     </div>
//   )
// };

import { Link } from "react-router-dom"
import notfound from "../assets/notFound.png"

export const PageNotFound = () => {
  return (
    <div className="container">
      <div className="not-found-container">
        <img src={notfound || "/placeholder.svg"} className="img-fluid" alt="Page not found" />
        <h2 className="text-primary mb-3">Oops! Page Not Found</h2>
        <p className="text-muted mb-4">The page you're looking for doesn't exist or has been moved.</p>
        <Link to="/" className="modern-btn">
          <i className="bi bi-house-door me-2"></i>
          Back to Home
        </Link>
      </div>
    </div>
  )
}
