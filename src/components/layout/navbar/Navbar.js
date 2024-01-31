import styles from "./Navbar.module.css";
import logo from "../../../Bilder/logo.png";

function Navbar() {
  return (
    <nav className={styles.navbar}>
      <div className={styles.inlay}>
        <a href="C:/Users/tonis/Documents/GitHub/Finstergram/index.html">
          <img className={styles.logo} src={logo} alt="logo" />
        </a>
        <div className={styles.container}>
          <button
            className={styles.Login}
            onclick="window.location.href='C:/Users/tonis/Documents/GitHub/Finstergram/login.html';"
          >
            Login
          </button>
          <button
            className={styles.signup}
            onclick="window.location.href='C:/Users/tonis/Documents/GitHub/Finstergram/signup.html';"
          >
            Sign up
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
