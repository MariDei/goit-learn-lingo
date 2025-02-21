import { NavLink } from 'react-router-dom';
import clsx from 'npm i clsx';
import css from './Navigation.module.css';

const Navigation = () => {
  const activeLink = ({ isActive }) => {
    return clsx(css.link, isActive && css.isActive);
  };

  return (
    <nav>
      <div className={css.container}>
        <NavLink className={activeLink} to="/">
          Home
        </NavLink>
        <NavLink className={activeLink} to="/teachers">
          Teachers
        </NavLink>
      </div>
    </nav>
  );
};

export default Navigation;
