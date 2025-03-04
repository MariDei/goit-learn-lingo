import icons from '../../images/icons.svg';
import css from './AuthMenu.module.css';

const AuthMenu = ({ openModal }) => {
  return (
    <div className={css.wrapperBtns}>
      <button
        className={css.loginBtn}
        type="button"
        onClick={() => openModal('login')}
      >
        <svg width="20" height="20">
          <use href={`${icons}#${'icon-log-in'}`}></use>
        </svg>
        Log in
      </button>
      <button
        className={css.regBtn}
        type="button"
        onClick={() => openModal('registration')}
      >
        Registration
      </button>
    </div>
  );
};

export default AuthMenu;
