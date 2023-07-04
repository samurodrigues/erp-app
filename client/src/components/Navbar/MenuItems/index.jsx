import Dropdown from './Dropdown';
import { Link } from 'react-router-dom';

export default function MenuItems({ items }) {
  return(

    <li className='nav-item dropdown'>
      {items.submenu ? (
        <>
          <a className='nav-link dropdown-toggle' role='button' data-bs-toggle="dropdown" aria-expanded="false">
            {items.title}
          </a>
          <Dropdown submenus={items.submenu} />
        </>
      ) : (
        <Link className='nav-link active' aria-current="page" to={items.url}>{items.title}</Link>
      )}
    </li>

    // <li className="menu-items">
    //   {items.submenu ? (
    //     <>
    //       <a>
    //         {items.title}{' '}
    //       </a>
          // <Dropdown submenus={items.submenu} />
    //     </>
    //   ) : (
    //     <Link to={items.url}>{items.title}</Link>
    //   )}
    // </li>
  )
}