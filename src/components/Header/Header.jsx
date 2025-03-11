import Logo from '../Logo/Logo';
import Navigation from '../Navigation/Navigation';
import AuthMenu from '../AuthMenu/AuthMenu';
import css from './Header.module.css';

const Header = () => {
  return (
    <header className={css.container}>
      <Logo />
      <Navigation />
      <AuthMenu />
    </header>
  );
};

export default Header;
