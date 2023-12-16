import "./App.css";
import Footer from "./components/footer/Footer";
import Nav from "./components/nav/Nav";

function App() {
  return (
    <div className="app flex column">
      <Nav />
      <div style={{ minHeight: "70vh" }}></div>
      <div className="footerDiv">
        <Footer />
      </div>
    </div>
  );
}

export default App;
