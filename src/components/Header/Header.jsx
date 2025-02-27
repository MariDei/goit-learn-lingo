import { Link } from 'react-router-dom';
import icons from '../../images/icons.svg';
import Navigation from '../Navigation/Navigation';
import AuthMenu from '../AuthMenu/AuthMenu';
import css from './Header.module.css';

const Header = () => {
  return (
    <header className={css.container}>
      <Link className={css.logo} to="/">
        <svg className={css.icon}>
          <use href={`${icons}#${'icon-ukraine'}`} />
        </svg>
        LearnLingo
      </Link>
      <Navigation />
      <AuthMenu />
    </header>
  );
};

export default Header;
