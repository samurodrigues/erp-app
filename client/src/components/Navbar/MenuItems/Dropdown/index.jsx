import { Link } from "react-router-dom"

export default function Dropdown({ submenus }) {
  return(
    <ul className="dropdown">
      {submenus.map((submenu, index) => (
        <li key={index} className="dropdown-item">
          <Link className="dropdown-content" to={submenu.url}>{submenu.title}</Link>
        </li>
      ))}
    </ul>
  )
}