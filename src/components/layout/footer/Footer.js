import styles from "./Footer.module.css";

function Footer() {
  return (
    <footer>
      <div>
        <div className={styles.Impressum}>
          <p>Meta</p>
          <p>Info</p>
          <p>Blog</p>
          <p>Jobs</p>
          <p>Hilfe</p>
          <p>API</p>
          <p>Datenrichtlinie</p>
          <p>Cookie-Einstellungen</p>
          <p>Nutzungsbedingungen und Impressum</p>
          <p>UrhDaG/MStV</p>
          <p>Standorte</p>
          <p>Instagram Lite</p>
          <p>Threads</p>
          <p>Hochladen von Kontakten und Nicht-Nutzer</p>
          <p>Meta Verified</p>
        </div>
        <div className={styles.Fußzeile}>
          <p>Deutsch</p>
          <p>© 2024 Instagram from Meta</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
