import css from './AuthMenu.module.css';

const AuthMenu = () => {
  return (
    <div className={css.wrapperBtns}>
      <button className={css.loginBtn} type="button">
        <svg id="icon-log-in" width="20" height="20" />
        Log in
      </button>
      <button className={css.regBtn} type="button">
        Registration
      </button>
    </div>
  );
};

export default AuthMenu;
