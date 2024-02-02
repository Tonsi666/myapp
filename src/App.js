import "./styles/App.css";
import Navbar from "./components/layout/navbar/Navbar";
import Footer from "./components/layout/footer/Footer";
import "./styles/variables.css";
import Gallery from "./components/layout/gallery/gallery";
import Profil from "./components/layout/body/Body";
import DatabaseResponse from "./utils/DatabaseResponse";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Profil data={DatabaseResponse} />
      <Gallery />
      <Footer />
    </div>
  );
}

export default App;
