import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useEffect } from "react";
import Home from "./views/home";
import useAuthStore from "./store/authStore";
// import About from "./views/about";
// import Package from "./views/package";
// import Checkout from "./views/checkout";
// import Offering from "./views/offering";
// import Contact from "./views/contact";
// import Gallery from "./views/gallery";
import Header from "./components/Header";
import Footer from "./components/Footer";
import { Toaster } from "react-hot-toast";

// import Orders from "./views/orders";
// import Profile from "./views/profile";
// import Cars from "./views/car";

function App() {
    const { checkSession, session, loading } = useAuthStore();

  useEffect(() => {
    checkSession();
  }, [checkSession]);
    if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
      
         Processing your request
       
      </div>
    );
  }
  return (
    <BrowserRouter>
        <Toaster position="top-right" reverseOrder={false} />
        <Header /> 
        
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/about" element={<About />} />
          <Route path="/packages" element={<Package />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/our-offerings" element={<Offering />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/gallery" element={<Gallery/>}/>
          
          <Route path="/orders" element={<Orders />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/cars" element={<Cars />} /> */}
          <Route path="*" element={<h2>404 - Page not found</h2>} />
        </Routes>
        
        <Footer />
    </BrowserRouter>
  );
}

export default App;