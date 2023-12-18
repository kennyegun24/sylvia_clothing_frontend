import { Route, Routes } from "react-router-dom";
import "./App.css";
import CartModal from "./components/cart/CartModal";
import Footer from "./components/footer/Footer";
import Nav from "./components/nav/Nav";
import { ShowCartProvider } from "./context/showCart";
import Home from "./pages/home/Home";
import Collections from "./pages/collections/Collections";
import CollectionProducts from "./pages/collections/CollectionProducts/CollectionProducts";

function App() {
  return (
    <div className="app flex column">
      <ShowCartProvider>
        <Nav />
        <CartModal />
        <div style={{ minHeight: "70vh" }}>
          <Routes>
            <Route index element={<Home />} />
            <Route path="/collections" element={<Collections />} />
            <Route path="/collections/:id" element={<CollectionProducts />} />
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
