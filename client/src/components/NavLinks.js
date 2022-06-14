import links from "../utils/links"
import { NavLink } from "react-router-dom"

const NavLinks = () => {
  return (
    <div className='nav-links'>
      {links.map((link) => {
        return (
          <NavLink
            to={link.path}
            className={({ isActive }) =>
              isActive ? "nav-link active" : "nav-link"
            }
            key={link.id}
          >
            <span className='icon'>
              {link.icon} <div>{link.text}</div>
            </span>
          </NavLink>
        )
      })}
    </div>
  )
}
export default NavLinks
