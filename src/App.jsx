import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import data from "./data.json";
import Nav from "./Components/Nav";
import Header from "./Components/Header";
import Section from "./Components/Section";
import Footer from "./Components/Footer";
import "./App.css";

function App() {
  const [cart, setCart] = useState(0);
  const [products, setProducts] = useState(data);
  const addToCart = (id) => {
    let index = products.findIndex((item) => item.id === id);
    let temp = products;
    temp[index].isInCart ? setCart(cart - 1) : setCart(cart + 1);
    temp[index].isInCart = !temp[index].isInCart;
    setProducts([...temp]);
  };
  return (
    <div className="App">
      <Nav cart={cart} />
      <Header />
      <Section products={products} addToCart={addToCart} />
      <Footer />
    </div>
  );
}

export default App;
