import { Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";
import { Skills } from "./pages/Skills";
import { ShoppingCartProvider } from "./context/ShoppingCartContext";
import { Cart } from "./components/Cart";
import { useCart } from "./hooks/useCart";
import { Portfolio } from "./pages/Portfolio";
import { EngineeringTomorrow } from "./pages/subPages/EngineeringTomorrow";
import { Capstone } from "./pages/subPages/Capstone";
import { SoftwareArch } from "./pages/subPages/SoftwareArch";
import Footer from "./components/Footer";
import { useEffect, useState } from "react";
import Loading from "./components/Loading";
import TypingHeader from "./components/TypingHeader";

function App() {
  const { isOpen, toggle } = useCart();
  const [isLoading, setLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <>
      {isLoading ? (
        <Loading />
      ) : (
        <>
          <ShoppingCartProvider>
            <Container className="mb-4">
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/about" element={<About />} />
                <Route path="/skills" element={<Skills />} />
                <Route path="/contact" element={<Contact />} />
                <Route path="/portfolio" element={<Portfolio />} />
                <Route path="/Capstone" element={<Capstone />} />
                <Route
                  path="/EngineeringTomorrow"
                  element={<EngineeringTomorrow />}
                />
                <Route path="/SoftwareArch" element={<SoftwareArch />} />
                {/* <Route path='/signin' element={<SignIn />} /> */}
              </Routes>
            </Container>
            <Cart isOpen={isOpen} toggle={toggle}></Cart>
          </ShoppingCartProvider>
          <Footer />
        </>
      )}
    </>
  );
}

export default App;
