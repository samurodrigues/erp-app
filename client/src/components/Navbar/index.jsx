import { menuList } from './menuList';
import styled from 'styled-components';
import MenuItems from './MenuItems';
import { Link } from 'react-router-dom';

const NavBar = styled.nav`
  width: 100vw;
  height: 7vh;
  position: fixed;
  z-index: 1000;
  left: 0;
  top: 0;
  display: flex;
  justify-content: space-around;
  align-items: center;
  
  background-color: #9DC08B;
  
  ul {
    display: flex;
    align-items: center;
    gap: 1em;
  }

  li {
    height: 66px;
    width: 100px;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: 35px;
    transition: 200ms;

    &:hover{
      background-color: #609966;
      border-radius: 0;

      a {
        color: #FFFFFF;
      }

      .dropdown{
        display: flex;
      }

      .dropdown-content{
        color: #000000;
      }
    }
  }
  
  a {
    font-weight: bold;
    color: #40513B;
  }

  .dropdown {
    display: none;
    gap: 0px;
    flex-direction: column;
    background-color: #e9e9e9;
    position: absolute;
    top: 65px;
  }

  .dropdown-item {
    height: 20px;
    width: 215px;
    padding: 30px;

    &:hover{
      background-color: #d6d6d6;
      border-radius: 0;

    }
  }

  .dropdown-content{
    color: #000000;
    text-align: center;
    font-weight: 400;
  }

`;

export default function Navbar() {
  return(
    <NavBar>
      <h1><Link to="/">SISTEC</Link></h1>
      <ul className='navbar_list'>
        {menuList.map((menu, index) => {
          return (
            <MenuItems items={menu} key={index} />
          )
        })}
      </ul>
    </NavBar>
  )
}