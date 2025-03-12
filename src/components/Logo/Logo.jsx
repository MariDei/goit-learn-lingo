import { Link } from 'react-router-dom';
import icons from '../../images/icons.svg';
import css from './Logo.module.css';

const Logo = () => {
  return (
    <div>
      <Link className={css.logo} to="/">
        <svg width="28" height="28">
          <use href={`${icons}#${'icon-ukraine'}`} />
        </svg>
        <span>LearnLingo</span>
      </Link>
    </div>
  );
};

export default Logo;
