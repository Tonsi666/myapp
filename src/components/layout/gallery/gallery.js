import styles from "./gallery.module.css";
import Bild1 from "../../../Bilder/Bild1.jpg";
import Bild2 from "../../../Bilder/Bild2.jpg";
import Bild3 from "../../../Bilder/Bild3.jpg";
import Bild4 from "../../../Bilder/Bild4.jpg";

function Gallery() {
  return (
    <div className={styles.gallery}>
      {/* <div id="loading">Loading...</div> */}
      <div id="imageGrid" className={styles.grid_container}>
        <img className={styles.gallery_img} src={Bild1} alt="Bild" />
        <img className={styles.gallery_img} src={Bild2} alt="Bild" />
        <img className={styles.gallery_img} src={Bild3} alt="Bild" />
        <img className={styles.gallery_img} src={Bild4} alt="Bild" />
      </div>
    </div>
  );
}

export default Gallery;
