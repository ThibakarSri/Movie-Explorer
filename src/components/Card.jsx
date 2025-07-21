// import { Link } from "react-router-dom";
// import backup from "../assets/backup.jpg";

// export const Card = ({movie}) => {
//   const { poster_path, id, overview, title, vote_average, vote_count } = movie;

//   const image = poster_path ? `https://image.tmdb.org/t/p/original${poster_path}` : backup;

//   return (
//     <div className="col">
//       <div className="card shadow-sm" title={title}>
//         <img src={image} alt="" className="card-img-top"/>

//         <div className="card-body">
//           <h5 className="card-title text-primary text-overflow-1 "> {title} </h5>
//           <p className="card-text text-overflow-2 ">{overview}</p>
//           <div className="d-flex justify-content-between align-items-center">
//             <Link to={`/movie/${id}`} className="btn btn-sm btn-outline-primary stretched-link">
//               Read More
//             </Link>

//             <small>
//               <i className="bi bi-star-fill text-warning"></i>
//               {vote_average} | {vote_count} review
//             </small>
//           </div>
//         </div>
//       </div>
//     </div> 
//   )
// };

import { Link } from "react-router-dom"
import backup from "../assets/backup.jpg"

export const Card = ({ movie }) => {
  const { poster_path, id, overview, title, vote_average, vote_count } = movie
  const image = poster_path ? `https://image.tmdb.org/t/p/original${poster_path}` : backup

  return (
    <div className="col">
      <div className="card modern-card h-100" title={title}>
        <div className="position-relative overflow-hidden">
          <img src={image || "/placeholder.svg"} alt={title} className="card-img-top" />
        </div>

        <div className="card-body d-flex flex-column">
          <h5 className="card-title text-overflow-1 mb-2">{title}</h5>
          <p className="card-text text-overflow-2 flex-grow-1">{overview}</p>

          <div className="card-bottom-section">
            <Link to={`/movie/${id}`} className="modern-btn">
              <i className="bi bi-eye"></i>
              View Details
            </Link>

            <div className="rating-badge">
              <i className="bi bi-star-fill "></i>
              {vote_average.toFixed(1)} 
              <span className="text-muted ms-1">  ({vote_count})</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
