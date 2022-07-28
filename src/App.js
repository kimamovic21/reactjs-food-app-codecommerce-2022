import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import HeadlineCards from "./components/HeadlineCards";
import Food from "./components/Food";
import Category from "./components/Category";

function App() {
  return (
    <div>
      <Navbar />
      <Hero />
      <HeadlineCards />
      <Food />
      <Category />
    </div>
  );
}

export default App;




// 1. importujemo Navbar.jsx komponentu
// 2. importujemo Hero.jsx komponentu
// 3. importujemo HeadlineCards.jsx komponentu
// 4. importujemo Food.jsx komponentu
// 5. importujemo Category.jsx komponentu