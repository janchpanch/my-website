// src/components/Navbar.jsx
import { NavLink } from "react-router-dom";
import navLinks from "../config/navLinks";

const Navbar = () => {
  // const [isOpen, setIsOpen] = useState(true);

  return (
    <nav class="container">
      <ul>
        <li><strong>Joe's Archive</strong></li>
      </ul>
      <ul>
        {navLinks.map(({ name, path }) => (
          <li key={path}>
            <NavLink to={path}>{name}</NavLink>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;
