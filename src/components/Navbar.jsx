import { NavLinks } from "../constants";
import { NavLink } from "react-router-dom";
import { FaBars } from "react-icons/fa";

const Navbar = () => {
  return (
    <nav className="container flex items-center justify-between p-3">
      <div className="logo">Logo</div>

      <ul className="hidden items-center space-x-4 md:flex">
        {NavLinks.map((link) => {
          let { id, linkName, linkPath } = link;
          return (
            <li key={id}>
              <NavLink
                to={linkPath}
                className={({ isActive }) =>
                  isActive ? "text-indigo-600" : ""
                }
              >
                {linkName}
              </NavLink>
            </li>
          );
        })}
      </ul>

      <FaBars className="md:hidden" />
    </nav>
  );
};

export default Navbar;
