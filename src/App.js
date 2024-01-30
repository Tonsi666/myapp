import logo from "./logo.svg";
import "./App.css";
import Header from "./components/layout/header/Header";
import Navbar from "./components/layout/navbar/Navbar";
import Footer from "./components/layout/footer/Footer";
import Body from "./components/layout/body/Body";

function App() {
  return (
    <div className="App">
      <Header />
      <Navbar />
      <Body />
      <Footer />
    </div>
  );
}

export default App;
