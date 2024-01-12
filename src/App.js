import { Route, Routes, Navigate } from "react-router-dom";
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
import { useSelector } from "react-redux";
import Login from "./pages/auth/Login";
import Register from "./pages/auth/Register";

function App() {
  const { currentUser } = useSelector((state) => state.user);
  console.log(currentUser);
  return (
    <div className="app flex column">
      <ShowCartProvider>
        <Nav />
        <CartModal />
        <div style={{ minHeight: "70vh", background: "#f4f4f4" }}>
          <Routes>
            <Route index element={<Home />} />
            <Route path="/collections" element={<Collections />} />
            <Route path="/collections/:name" element={<CollectionProducts />} />
            <Route
              path="/collections/:name/:product/:id"
              element={<Product />}
            />
            <Route
              path="/cart/checkout"
              element={currentUser ? <Cart /> : <Navigate to={"/login"} />}
            />
            <Route
              path="/payment/success"
              element={currentUser ? <Success /> : <Navigate to={"/login"} />}
            />
            <Route
              path="/payment/failure"
              element={currentUser ? <Failure /> : <Navigate to={"/login"} />}
            />
            <Route
              path="/login"
              element={!currentUser ? <Login /> : <Navigate to={"/"} />}
            />
            <Route
              path="/register"
              element={!currentUser ? <Register /> : <Navigate to={"/"} />}
            />
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
