import { Link } from 'react-router-dom';
import Logo from '';
import Navigation from '../Navigation/Navigation';
import AuthMenu from '../AuthMenu/AuthMenu';
import css from './Header.module.css';

const Header = () => {
  return (
    <header className={css.container}>
      <Link className={css.logo} to="/">
        <img src={Logo} width="28" height="28" />
        LearnLingo
      </Link>
      <Navigation />
      <AuthMenu />
    </header>
  );
};

export default Header;
