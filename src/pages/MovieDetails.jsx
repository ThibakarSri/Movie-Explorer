// import {useEffect, useState} from "react";
// import { useParams } from "react-router-dom";
// import backup from "../assets/backup.jpg";
// import { convertMinutes } from "../utils/utils";

// export const MovieDetails = () => { 
//   const params = useParams();
//   const [movie, setMovie] = useState([]);
//   const key = import.meta.env.VITE_API_KEY;
//   const url = `http://api.themoviedb.org/3/movie/${params.id}?api_key=${key}`;
//   const image = movie.poster_path ? `https://image.tmdb.org/t/p/original${movie.poster_path}` : backup;

//   useEffect(()=> {
//       async function fetchMovies() {
//           fetch(url)
//               .then((res) => res.json())
//               .then((jsonData) => {setMovie(jsonData); console.log(jsonData);});
//       }
//       fetchMovies();
//   }, []);


//   useEffect(() => {
//     document.title = `${movie.title}`;
//   });


//   return <main className="container">
//     <h5 className="text-danger py-2 border-bottom mb-3">{movie.title}</h5>
//     <div className="row">
//       <div className="col-md-4">
//         <img src={image} className="img-fluid img-thumbnail"/>
//       </div>
//       <div className="col-md-8">
//         <h3 className="text-primary">{movie.title}</h3>
//         <p className="mt-3">{movie.overview}</p>

//         {movie.genres? (
//           <p className="d-flex gap-3">
//             {movie.genres.map((genres) => (
//               <span key={genres.id} className="badge bg-danger">
//                 {genres.name}
//               </span>
//             ))}
//           </p> 
//         ) : ( 
//           ""
//         )}

//         <p className="mt-2">
//           <i className="bi bi-star-fill text-warning"></i> {movie.vote_average} |
//           <i className="bi bi-peple-fill text-success"></i> {movie.vote_count} reviews
//         </p>

//         <table className="table tbale-bordered w-50 mt-2">
//           <tbody>
//             <tr>
//               <th>Runtime</th>
//               <td>{convertMinutes(movie.runtime)}</td>
//             </tr>
//             <tr>
//               <th>Budget</th>
//               <td>{movie.budget}</td>
//             </tr>
//             <tr>
//               <th>Revenue</th>
//               <td>{movie.revenue}</td>
//             </tr>
//             <tr>
//               <th>Release Date</th>
//               <td>{movie.release_date}</td>
//             </tr>
//           </tbody>
//         </table>

//         <a className="btn btn-warning" href={`https://www.imdb.com/title/${movie.imdb_id}/`}>
//           View in IMDB
//         </a>
//       </div>
//     </div>
//   </main>
// };

"use client"

import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import backup from "../assets/backup.jpg"
import { convertMinutes } from "../utils/utils"

export const MovieDetails = () => {
  const params = useParams()
  const [movie, setMovie] = useState({})
  const key = import.meta.env.VITE_API_KEY
  const url = `http://api.themoviedb.org/3/movie/${params.id}?api_key=${key}`
  const image = movie.poster_path ? `https://image.tmdb.org/t/p/original${movie.poster_path}` : backup

  useEffect(() => {
    async function fetchMovies() {
      fetch(url)
        .then((res) => res.json())
        .then((jsonData) => {
          setMovie(jsonData)
        })
    }
    fetchMovies()
  }, [url])

  useEffect(() => {
    document.title = movie.title || "Movie Details"
  }, [movie.title])

  return (
    <main className="container">
      <h2 className="section-header">{movie.title}</h2>

      <div className="row g-4">
        <div className="col-lg-4">
          <img src={image || "/placeholder.svg"} className="img-fluid movie-poster" alt={movie.title} />
        </div>

        <div className="col-lg-8">
          <div className="bg-white p-4 rounded-3 shadow-sm h-100">
            <h3 className="text-primary mb-3 fw-bold">{movie.title}</h3>
            <p className="lead mb-4">{movie.overview}</p>

            {movie.genres && (
              <div className="mb-4">
                <h6 className="fw-semibold mb-2">Genres</h6>
                <div className="d-flex flex-wrap gap-2">
                  {movie.genres.map((genre) => (
                    <span key={genre.id} className="badge genre-badge">
                      {genre.name}
                    </span>
                  ))}
                </div>
              </div>
            )}

            <div className="row mb-4">
              <div className="col-sm-6">
                <div className="d-flex align-items-center mb-2">
                  <i className="bi bi-star-fill text-warning me-2"></i>
                  <span className="fw-semibold">{movie.vote_average?.toFixed(1)}</span>
                  <span className="text-muted ms-2">({movie.vote_count} reviews)</span>
                </div>
              </div>
            </div>

            <div className="table-responsive mb-4">
              <table className="table info-table">
                <tbody>
                  <tr>
                    <th style={{ width: "30%" }}>
                      <i className="bi bi-clock me-2"></i>Runtime
                    </th>
                    <td>{movie.runtime ? convertMinutes(movie.runtime) : "N/A"}</td>
                  </tr>
                  <tr>
                    <th>
                      <i className="bi bi-currency-dollar me-2"></i>Budget
                    </th>
                    <td>{movie.budget ? `$${movie.budget.toLocaleString()}` : "N/A"}</td>
                  </tr>
                  <tr>
                    <th>
                      <i className="bi bi-graph-up me-2"></i>Revenue
                    </th>
                    <td>{movie.revenue ? `$${movie.revenue.toLocaleString()}` : "N/A"}</td>
                  </tr>
                  <tr>
                    <th>
                      <i className="bi bi-calendar me-2"></i>Release Date
                    </th>
                    <td>{movie.release_date || "N/A"}</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {movie.imdb_id && (
              <a
                className="imdb-btn"
                href={`https://www.imdb.com/title/${movie.imdb_id}/`}
                target="_blank"
                rel="noopener noreferrer"
              >
                <i className="bi bi-play-circle me-2"></i>
                View on IMDb
              </a>
            )}
          </div>
        </div>
      </div>
    </main>
  )
}
