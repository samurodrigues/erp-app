import { Link } from "react-router-dom"

export default function Dropdown({ submenus }) {
  return(
    <ul className="dropdown-menu">
      {submenus.map((submenu, index) => (
        <li key={index}>
          <Link className="dropdown-item" to={submenu.url}>{submenu.title}</Link>
        </li>
      ))}
    </ul>
  )
}