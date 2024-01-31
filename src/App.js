import "./styles/App.css";
import Navbar from "./components/layout/navbar/Navbar";
import Footer from "./components/layout/footer/Footer";
import Body from "./components/layout/body/Body";
import "./styles/variables.css";
import Gallery from "./components/layout/gallery/gallery";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Body />
      <Gallery />
      <Footer />
    </div>
  );
}

export default App;
