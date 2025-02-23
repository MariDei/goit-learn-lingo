const AuthMenu = () => {
  return (
    <AuthBtns>
      <LoginBtn type="button">
        <LoginIcon id="icon-log-in" width="20" height="20" />
        Log in
      </LoginBtn>
      <RegBtn type="button">Registration</RegBtn>
    </AuthBtns>
  );
};

export default AuthMenu;
