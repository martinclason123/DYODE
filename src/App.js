import "./App.css";
import {
  Banner,
  Navbar,
  Hero,
  Categories,
  Carousel,
  Favorites,
} from "./components";

const App = () => {
  return (
    <div className="App">
      <Banner />
      <Navbar />
      <Hero />
      <Categories />
      <Carousel />
      <Favorites />
    </div>
  );
};

export default App;
