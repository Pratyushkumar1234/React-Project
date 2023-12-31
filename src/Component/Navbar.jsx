import { NavLink } from "react-router-dom";
import { styled } from "styled-components";

export default function Navbar() {
  const Nav = styled.nav`
    .navbar-list {
      display: flex;
      gap: 4.8rem;
    }
    .navbar-link {
      &:link,
      &:visited {
        display: inline-block;
        font-size: 1.8rem;
        text-transform: uppercase;
        color: ${({ theme }) => theme.colors.black};
        transition: color 0.3s linear;
      }
      &:hover,
      &:active {
        color: ${({ theme }) => theme.colors.helper};
      }
    }
  `;

  return (
    <>
      <Nav>
        <div className="menuIcon">
          <ul className="navbar-list">
            <li>
              <NavLink className="navbar-link" to="/">
                Home
              </NavLink>
            </li>
            <li>
              <NavLink className="navbar-link" to="/about">
                About
              </NavLink>
            </li>
            <li>
              <NavLink className="navbar-link" to="/contact">
                Contact
              </NavLink>
            </li>
            <li>
              <NavLink className="navbar-link" to="/service">
                Service
              </NavLink>
            </li>
          </ul>
        </div>
      </Nav>
    </>
  );
}
