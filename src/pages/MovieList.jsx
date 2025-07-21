// import { useEffect } from "react"
// import { useNavigate } from "react-router-dom";
// import { Card } from "../components";
// import { useFetch } from "../hooks/useFetch";

// export const MovieList = ({ title , apiPath}) => {
//   const {data : movies} = useFetch(apiPath);
//   useEffect(() => {
//     document.title = title;
//   });
//   const navigator=useNavigate();
//   return (
//     <div>
//       <main className="container">
//         {title == "Your Guide to Great Movies" ? (
//           <div className="bg-body-tertiary p-5 border mb-5">
//             <h3 className="text-primary">Welcome to MovieExplorer</h3>
//             <p className="lead"> Discover movies you&apos;ll love with personalized suggestions, curated collections, and quick searches - your guide to finding great flims
//             </p>
//             <button className="btn btn-primary" onClick={()=>{
//               navigator("/movies/upcoming")
//               }}
//             > 
//               Explore Now 
//              </button>
//           </div>
//         ) : (
//           ""
//         )}
//         <h5 className="text-danger
//         py-2 border-bottom">{title}</h5>

//         <div className="row rows-cols-1 row-cols-md-2 
//         row-cols-lg-3 g-3 py-2">
//           {movies.map((movie) => {
//             return <Card key={movie.id} movie={movie} />;
//           })}
//         </div>
//       </main>
//     </div>
//   );
// };



"use client"

import { useEffect } from "react"
import { useNavigate } from "react-router-dom"
import { Card } from "../components"
import { useFetch } from "../hooks/useFetch"

export const MovieList = ({ title, apiPath }) => {
  const { data: movies } = useFetch(apiPath)
  const navigator = useNavigate()

  useEffect(() => {
    document.title = title
  })

  return (
    <div className="container">
      <main>
        {title === "Your Guide to Great Movies" ? (
          <div className="hero-section">
            <div className="row align-items-center">
              <div className="col-lg-8">
                <h3>Welcome to MovieExplorer</h3>
                <p className="lead">
                  Discover movies you'll love with personalized suggestions, curated collections, and quick searches -
                  your ultimate guide to finding great films that match your taste.
                </p>
                <button className="hero-btn" onClick={() => navigator("/movies/upcoming")}>
                  <i className="bi bi-play-circle me-2"></i>
                  Start Exploring
                </button>
              </div>
              <div className="col-lg-4 text-center">
                <i className="bi bi-camera-reels" style={{ fontSize: "8rem", opacity: "0.3" }}></i>
              </div>
            </div>
          </div>
        ) : null}

        <h2 className="section-header">{title}</h2>

        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 g-4">
          {movies.map((movie) => (
            <Card key={movie.id} movie={movie} />
          ))}
        </div>

        {movies.length === 0 && (
          <div className="text-center py-5">
            <i className="bi bi-film" style={{ fontSize: "4rem", opacity: "0.3" }}></i>
            <p className="mt-3 text-muted">No movies found</p>
          </div>
        )}
      </main>
    </div>
  )
}
