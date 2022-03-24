import "./styles.css";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Photos from "./pages/Photos";
import Cart from "./pages/Cart";

export default function App() {
  return (
    <div className="App">
      {/* header here */}
      <Header />
      {/*routes here */}
      <Routes>
        <Route exact path="/" element={<Photos />} />
        <Route path="/" element={<Cart />} />
      </Routes>
    </div>
  );
}
