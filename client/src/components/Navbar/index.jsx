import { menuList } from './menuList';
import MenuItems from './MenuItems';
import { Link } from 'react-router-dom';


export default function Navbar() {
  return (
    <nav className='navbar navbar-expand-lg bg-body-tertiary' id='navbar-sistem'>
      <div className="container-fluid">
        <Link className='navbar-brand' to="/">SISTEC</Link>

        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id='navbarSupportedContent'>
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            {menuList.map((menu, index) => {
              return (
                <MenuItems items={menu} key={index} />
              )
            })}
          </ul>
        </div>
      </div>
    </nav>
  )
}