import { Route, Routes } from "react-router-dom";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./components/Home/Home";
import ProductDetails from "./components/Home/ProductDetails";
import ReviewSection from "./components/Home/ReviewSection ";


function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/reviews" element={<ReviewSection />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;