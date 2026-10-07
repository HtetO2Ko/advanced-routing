import { NavLink, Outlet } from 'react-router-dom';
import classes from './MainNavigation.module.css';

function MainNavigation() {
  return (
    <>
      <header className={classes.header}>
        <nav>
          <ul className={classes.list}>
            <li>
              <NavLink className={({ isActive }) => isActive ? classes.active : undefined} to='/'>Home</NavLink>
            </li>
            <li>
              <NavLink className={({ isActive }) => isActive ? classes.active : undefined} to='/events'>Events</NavLink>
            </li>
          </ul>
        </nav>
      </header>
      <Outlet />
    </>
  );
}

export default MainNavigation;
