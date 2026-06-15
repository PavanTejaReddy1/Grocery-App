import { Route, Routes } from "react-router-dom";
import Splash from "./pages/Splash";
import Welcome from "./pages/Welcome";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import OTP from "./pages/OTP";
import Location from "./pages/Location";
import Home from "./pages/Home";
import ProductDetails from "./pages/ProductDetails";
import Search from "./pages/Search";
import Cart from "./pages/Cart";
import Favorites from "./pages/Favorites";
import Checkout from "./pages/Checkout";
import Success from "./pages/Success";
import Error from "./pages/Error";
import SignIn from "./pages/SignIn";
import Number from "./pages/Number";
import Verification from "./pages/Verification";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Splash />} />
      <Route path="/welcome" element={<Welcome />} />
      <Route path="/number" element={<Number />} />
      <Route path="/verification" element={<Verification />} />
      <Route path="/signin" element={<SignIn />} />
      <Route path="/login" element={<Login />} />
      <Route path="/signup" element={<Signup />} />
      <Route path="/otp" element={<OTP />} />
      <Route path="/location" element={<Location />} />
      <Route path="/home" element={<Home />} />
      <Route path="/product/:id" element={<ProductDetails />} />
      <Route path="/search" element={<Search />} />
      <Route path="/cart" element={<Cart />} />
      <Route path="/favorites" element={<Favorites />} />
      <Route path="/checkout" element={<Checkout />} />
      <Route path="/success" element={<Success />} />
      <Route path="/error" element={<Error />} />
    </Routes>
  );
}

export default App;