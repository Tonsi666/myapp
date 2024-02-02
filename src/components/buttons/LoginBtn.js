import { useState } from "react";
import ClassicBtn from "./classic/ClassicBtn";
import styles from "./LoginBtn.module.css";

function LoginBtn() {
  const [loggedIn, setLoggedIn] = useState(false);

  function onClickLogIn() {
    setLoggedIn(true);
  }

  function onClickLogOut() {
    setLoggedIn(false);
  }

  if (loggedIn) {
    return (
      <ClassicBtn
        className={styles.Login}
        text="Einloggen"
        onClick={onClickLogOut}
      />
    );
  }

  return <ClassicBtn text="Eingeloggt" onClick={onClickLogIn} />;
}

export default LoginBtn;
