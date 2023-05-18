import { Routes, Route } from "react-router-dom";
import { Container } from "react-bootstrap";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Contact } from "./pages/Contact";
import { Skills } from "./pages/Skills";
import { Navbar } from "./components/Navbar";
import { ShoppingCartProvider } from "./context/ShoppingCartContext";
import { Cart } from "./components/Cart";
import { useCart } from "./hooks/useCart";
import { Portfolio } from "./pages/Portfolio";
import { EngineeringTomorrow } from "./pages/subPages/EngineeringTomorrow";
import { LucidPasta } from "./pages/subPages/LucidPasta";
import { Capstone } from "./pages/subPages/Capstone";
import { CAD } from "./pages/subPages/CAD";
import { Animation } from "./pages/subPages/Animation";
import { MostlyWaste } from "./pages/subPages/MostlyWaste";
import { SoftwareArch } from "./pages/subPages/SoftwareArch";
import Footer from "./components/Footer";

function App() {
  const { isOpen, toggle } = useCart();
  return (
    <>
      <ShoppingCartProvider>
        {/* <Navbar /> */}
        <Container className="mb-4">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/portfolio" element={<Portfolio />} />
            <Route path="/Animation" element={<Animation />} />
            <Route path="/CAD" element={<CAD />} />
            <Route path="/Capstone" element={<Capstone />} />
            <Route
              path="/EngineeringTomorrow"
              element={<EngineeringTomorrow />}
            />
            <Route path="/LucidPasta" element={<LucidPasta />} />
            <Route path="/MostlyWaste" element={<MostlyWaste />} />
            <Route path="/SoftwareArch" element={<SoftwareArch />} />
            {/* <Route path='/signin' element={<SignIn />} /> */}
          </Routes>
        </Container>
        <Cart isOpen={isOpen} toggle={toggle}></Cart>
      </ShoppingCartProvider>
      <Footer />
    </>
  );
}

export default App;
