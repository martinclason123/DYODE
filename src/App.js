import "./App.css";
import {
  Banner,
  Navbar,
  Hero,
  Categories,
  Carousel,
  Favorites,
  Newsletter,
  Footer,
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
      <Newsletter
        message={"Sign Up & Stay Connected"}
        blurb={
          "Sign up for the newsletter and get 20% off! Gain access to exclusive offers and be the first to know when new stuff drops!"
        }
        actionMessage={"subscribe"}
      />
      <Footer />
    </div>
  );
};

export default App;
