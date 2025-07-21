// export const Footer = () => {
//   return (
//     <div className="container">
//       <footer className="py-3 my-5 border-top">
//         <p className="text-center text-body-secondary">
//           &copy; 2025 MovieExplorer, Inc
//         </p>
//       </footer>
//     </div>
//   )
// };


export const Footer = () => {
  return (
    <footer className="modern-footer">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-md-6">
            <div className="d-flex align-items-center">
              <i className="bi bi-film me-2" style={{ fontSize: "1.5rem", color: "#6366f1" }}></i>
              <span className="fw-bold">MovieExplorer</span>
            </div>
          </div>
          <div className="col-md-6 text-md-end mt-3 mt-md-0">
            <p className="mb-0">&copy; 2025 MovieExplorer. Crafted with ❤️ for movie lovers</p>
          </div>
        </div>
        <hr className="my-3 opacity-25" />
        <div className="text-center">
          <small className="opacity-75">
            Powered by{" "}
            <a href="https://www.themoviedb.org/" className="text-decoration-none" style={{ color: "#6366f1" }}>
              TMDB
            </a>
          </small>
        </div>
      </div>
    </footer>
  )
}
