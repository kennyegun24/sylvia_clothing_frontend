import { Route, Routes } from "react-router-dom";
import "./App.css";
import CartModal from "./components/cart/CartModal";
import Footer from "./components/footer/Footer";
import Nav from "./components/nav/Nav";
import { ShowCartProvider } from "./context/showCart";
import Home from "./pages/home/Home";
import Collections from "./pages/collections/Collections";
import CollectionProducts from "./pages/collections/CollectionProducts/CollectionProducts";
import Product from "./pages/Product";
import Cart from "./pages/Cart";
import Success from "./pages/payment_status/Success";
import Failure from "./pages/payment_status/Failure";

function App() {
  return (
    <div className="app flex column">
      <ShowCartProvider>
        <Nav />
        <CartModal />
        <div style={{ minHeight: "70vh", background: "#f4f4f4" }}>
          <Routes>
            <Route index element={<Home />} />
            <Route path="/collections" element={<Collections />} />
            <Route path="/cart/checkout" element={<Cart />} />
            <Route path="/collections/:name" element={<CollectionProducts />} />
            <Route path="/collections/:name/:product" element={<Product />} />
            <Route path="/payment/success" element={<Success />} />
            <Route path="/payment/failure" element={<Failure />} />
          </Routes>
        </div>
        <div className="footerDiv">
          <Footer />
        </div>
      </ShowCartProvider>
    </div>
  );
}

export default App;
