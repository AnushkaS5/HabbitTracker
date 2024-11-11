import { Outlet } from 'react-router-dom';
import navEle from './navbar.module.css';

function Navbar() {
  return (
    <>
      <header className={navEle.nav}>
        <img src="https://cdn-icons-png.flaticon.com/128/9119/9119230.png" className={navEle.navimg} alt="Habit Tracker Logo"/>
        <h3 className={navEle.navheading}>Habit Tracker</h3>
      </header>
      <Outlet />
    </>
  );
}

export default Navbar;
