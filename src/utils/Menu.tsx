import { NavLink } from "react-router-dom";

export default function Menu() {
  const ActClass = "active";

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="cotainer-fluid">
        <NavLink activeClassName={ActClass} className="navbar-brand" to="/">
          React Peliculas
        </NavLink>
        <div className="collapse navbar-collapse">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <NavLink className="nav-link" activeClassName={ActClass} to="/generos" >
                Generos
              </NavLink>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
