// import { NavLink, useNavigate } from "react-router-dom";

// export const Header = () => {
//   const navigator = useNavigate();
//   const handleSearch = (e) => {
//     e.preventDefault();
//     const queryTerm = e.target.search.value;
//     e.target.reset();
//     return navigator(`/search?q=${queryTerm}`);
//   };
//   return (
//     <nav className="navbar navbar-expand-md fixed-top bg-primary navbar-dark">
//       <div className="container-fluid">
//         <NavLink to="/" href="#" className="navbar-brand"> 
//         <i className="bi bi-film"></i>
//             Movie Explorer
//         </NavLink>

//         <button className="navbar-toggler" type="button" 
//         data-bs-toggle="collapse" data-bs-target="#menu">
//           <span className="navbar-toggler-icon"></span>
//         </button>

//         <div className="collapse navbar-collapse" id="menu">
//           <ul className="navbar-nav me-auto mb-2 mb-md-0" >
//             <li className="nav-item">
//               <NavLink to="/" className="nav-link">
//                 Home
//               </NavLink>
//             </li>
//             <li className="nav-item">
//               <NavLink to="/movies/top" className="nav-link">
//                 Top Rated
//               </NavLink>
//             </li>
//             <li className="nav-item">
//               <NavLink to="/movies/popular" className="nav-link">
//                 Popular
//               </NavLink>
//             </li>
//             <li className="nav-item">
//               <NavLink to="/movies/upcoming" className="nav-link">
//                 Upcoming
//               </NavLink>
//             </li>
//           </ul>
//           <form onSubmit={handleSearch}>
//             <input type="search" className="form-control" placeholder="search" name="search" />
//           </form>
//         </div>
//       </div>
//     </nav>
//   );
// };


"use client"

import { NavLink, useNavigate } from "react-router-dom"

export const Header = () => {
  const navigator = useNavigate()
  const handleSearch = (e) => {
    e.preventDefault()
    const queryTerm = e.target.search.value
    e.target.reset()
    return navigator(`/search?q=${queryTerm}`)
  }

  return (
    <nav className="navbar navbar-expand-lg fixed-top modern-navbar">
      <div className="container-fluid">
        <NavLink to="/" className="navbar-brand">
          <i className="bi bi-film"></i>
          MovieExplorer
        </NavLink>

        <button
          className="navbar-toggler border-0"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#menu"
          style={{ boxShadow: "none" }}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="menu">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink to="/" className="nav-link">
                <i className="bi bi-house-door me-1"></i>
                Home
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/movies/top" className="nav-link">
                <i className="bi bi-star me-1"></i>
                Top Rated
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/movies/popular" className="nav-link">
                <i className="bi bi-fire me-1"></i>
                Popular
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/movies/upcoming" className="nav-link">
                <i className="bi bi-calendar-event me-1"></i>
                Upcoming
              </NavLink>
            </li>
          </ul>

          <form onSubmit={handleSearch} className="modern-search">
            <input type="search" className="form-control" placeholder="Search movies..." name="search" />
          </form>
        </div>
      </div>
    </nav>
  )
}
