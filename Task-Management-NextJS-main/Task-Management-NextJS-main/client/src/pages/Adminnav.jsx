// import React from 'react';
// import { Link } from 'react-router-dom';

// function Adminnav({ showAdminOnly }) {
//   return (
//     <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
//       <Link className="navbar-brand" to="/">Admin</Link>
//       <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
//         <span className="navbar-toggler-icon"></span>
//       </button>
//       <div className="collapse navbar-collapse" id="navbarNav">
//         <ul className="navbar-nav mr-auto">
//           {/* Left side of navbar */}
//         </ul>
//         <ul className="navbar-nav ml-auto">
//           {showAdminOnly ? (
//             <li className="nav-item">
//               <Link className="nav-link" to="/admin">Admin</Link>
//             </li>
//           ) : (
//             <>
//               <li className="nav-item">
//                 <Link className="nav-link" to="/dashboard">Dashboard</Link>
//               </li>
//               <li className="nav-item">
//                 <Link className="nav-link" to="/admin">Admin</Link>
//               </li>
//             </>
//           )}
//           <li className="nav-item">
//             <Link className="nav-link" to="/">Login</Link>
//           </li>
//         </ul>
//       </div>
//     </nav>
//   );
// }

// export default Adminnav;
import React from 'react';
import { Link } from 'react-router-dom';

function Adminnav({ showAdminOnly }) {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <Link className="navbar-brand" to="/">Admin</Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNav">
        <ul className="navbar-nav mr-auto">
          {/* Left side of navbar */}
        </ul>
        <ul className="navbar-nav ml-auto">
          {showAdminOnly ? (
            <li className="nav-item">
              <Link className="nav-link" to="/admin">Admin</Link>
            </li>
          ) : (
            <>
              <li className="nav-item">
                <Link className="nav-link" to="/dashboard">Dashboard</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/admin">Admin</Link>
              </li>
            </>
          )}
          <li className="nav-item">
            <Link className="nav-link" to="/">Login</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Adminnav;
