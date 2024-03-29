import Navbar from "./components/Navbar";
import Body from "./components/Body";
import { DiscogsProvider } from "./data/DiscogsData";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AlbumDetail from "./components/AlbumDetail";
import NotFound from "./components/NotFound";
import Cart from "./components/Cart";
import Login from "./components/Login";
import Signup from "./components/Signup";
import { AuthProvider } from "./contexts/AuthContext";
import ForgotPassword from "./components/ForgotPassword";
import { PayPalScriptProvider } from "@paypal/react-paypal-js";

function App() {
  return (
    // @ts-ignore
    <PayPalScriptProvider options={{ "client-id": process.env.CLIENT_ID }}>
      <AuthProvider>
        <DiscogsProvider>
          <Navbar />
          <Routes>
            <Route path="/" element={<Body />} />
            <Route path="albums/:id" element={<AlbumDetail />} />
            <Route path="notfound/" element={<NotFound />} />
            <Route path="cart/" element={<Cart />} />
            <Route path="login/" element={<Login />} />
            <Route path="signup/" element={<Signup />} />
            <Route path="forgot-password" element={<ForgotPassword />} />
          </Routes>
        </DiscogsProvider>
      </AuthProvider>
    </PayPalScriptProvider>
  );
}

export default App;
