import "./App.css";
import CartModal from "./components/cart/CartModal";
import Footer from "./components/footer/Footer";
import Nav from "./components/nav/Nav";
import { ShowCartProvider } from "./hooks/showCart";

function App() {
  return (
    <div className="app flex column">
      <ShowCartProvider>
        <Nav />
        <CartModal />
        <div style={{ minHeight: "70vh" }}></div>
        <div className="footerDiv">
          <Footer />
        </div>
      </ShowCartProvider>
    </div>
  );
}

export default App;
