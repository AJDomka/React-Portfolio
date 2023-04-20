import { Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Passion } from "./pages/Passion";
import { Contact } from "./pages/Contact";
import { School } from "./pages/School";
import { Navbar } from "./components/Navbar";
import { ShoppingCartProvider } from "./context/ShoppingCartContext";
import { Cart } from "./components/Cart";
import { useCart } from "./hooks/useCart";

function App() {
  const { isOpen, toggle } = useCart();
  return (
    <>
      <ShoppingCartProvider>
        <Navbar />
        <Container className="mb-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/passion" element={<Passion />} />
            <Route path="/school" element={<School />} />
            <Route path="/contact" element={<Contact />} />
            {/* <Route path='/signin' element={<SignIn />} /> */}
          </Routes>
        </Container>
        <Cart isOpen={isOpen} toggle={toggle}></Cart>
      </ShoppingCartProvider>
    </>
  );
}

export default App;
