// import { useSearchParams } from "react-router-dom";
// import { Card } from "../components";
// import { useFetch } from "../hooks/useFetch";
// import { useEffect } from "react"

// export const Search = ({ apiPath }) => {
//   const [searchParams] = useSearchParams();
//   const queryTerm = searchParams.get("q");
//   const { data: movies } = useFetch(apiPath, queryTerm);

//   useEffect(() => {
//     document.title = `Search result for ${queryTerm}`;
//   });

//   return (
//     <main className="container">
//       <h5 className="text-danger py-2 border-bottom">
//         {movies.length==0?`No result found for ${queryTerm}` : `Result found for ${queryTerm}` }
//       </h5>
//       <div className="row rows-cols-1 row-cols-md-2 
//         row-cols-lg-3 g-3 py-2">
//           {movies.map((movie) => {
//             return <Card key={movie.id} movie={movie} />;
//           })}
//         </div>
//     </main>
//   )
// };

"use client"

import { useSearchParams } from "react-router-dom"
import { Card } from "../components"
import { useFetch } from "../hooks/useFetch"
import { useEffect } from "react"

export const Search = ({ apiPath }) => {
  const [searchParams] = useSearchParams()
  const queryTerm = searchParams.get("q")
  const { data: movies } = useFetch(apiPath, queryTerm)

  useEffect(() => {
    document.title = `Search results for "${queryTerm}"`
  }, [queryTerm])

  return (
    <main className="container">
      <div className="d-flex align-items-center mb-4">
        <i className="bi bi-search me-3" style={{ fontSize: "2rem", color: "#6366f1" }}></i>
        <div>
          <h2 className="section-header mb-0">
            {movies.length === 0 ? `No results found for "${queryTerm}"` : `Search results for "${queryTerm}"`}
          </h2>
          <p className="text-muted mb-0">{movies.length} movies found</p>
        </div>
      </div>

      {movies.length === 0 ? (
        <div className="text-center py-5">
          <i className="bi bi-search" style={{ fontSize: "4rem", opacity: "0.3" }}></i>
          <h4 className="mt-3 text-muted">No movies found</h4>
          <p className="text-muted">Try searching with different keywords</p>
        </div>
      ) : (
        <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 row-cols-xl-4 g-4">
          {movies.map((movie) => (
            <Card key={movie.id} movie={movie} />
          ))}
        </div>
      )}
    </main>
  )
}
