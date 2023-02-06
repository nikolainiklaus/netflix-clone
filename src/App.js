import "./App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import CarouselParent from "./Components/CarouselParent.jsx";
import NavBar from "./Components/NavBar";
import logo from "./assets/netflix_logo.png";
import avatar from "./assets/avatar.png";
import Footer from "./Components/Footer";
import Genre from "./Components/Genre";

function App() {
  return (
    <div className="App">
      <div>
        <NavBar logo={logo} avatar={avatar}></NavBar>
      </div>
      <Genre></Genre>
      <CarouselParent />
      <Footer></Footer>
    </div>
  );
}

export default App;
