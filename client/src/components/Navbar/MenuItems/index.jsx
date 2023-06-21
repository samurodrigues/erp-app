import Dropdown from './Dropdown';
import { Link } from 'react-router-dom';

export default function MenuItems({ items }) {
  return(
    <li className="menu-items">
      {items.submenu ? (
        <>
          <a>
            {items.title}{' '}
          </a>
          <Dropdown submenus={items.submenu} />
        </>
      ) : (
        <Link to={items.url}>{items.title}</Link>
      )}
    </li>
  )
}