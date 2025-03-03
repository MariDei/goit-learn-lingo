import icons from '../../images/icons.svg';
import css from './AuthMenu.module.css';

const AuthMenu = () => {
  return (
    <div className={css.wrapperBtns}>
      <button className={css.loginBtn} type="button">
        <svg width="20" height="20">
          <use href={`${icons}#${'icon-log-in'}`}></use>
        </svg>
        Log in
      </button>
      <button className={css.regBtn} type="button">
        Registration
      </button>
    </div>
  );
};

export default AuthMenu;
