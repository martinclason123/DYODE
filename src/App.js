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
      <Newsletter />
      <Footer />
    </div>
  );
};

export default App;
