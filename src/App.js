import { redirect, Route, Routes } from "react-router-dom";
import Home from "./screens/Home";
import Login from "./screens/Login";
import Menu from "./screens/Menu";
import Cart from "./screens/Cart";
import Orders from "./screens/Orders";
import Register from "./screens/Register";

function App() {
  return (
    <div className="container-fluid ">
      <Routes>
        {/* <Route path="home" element={<Home />}></Route> */}
        <Route path="" element={<Home />}></Route>
        <Route path="login" element={<Login />}></Route>
        <Route path="menu" element={<Menu />}></Route>
        <Route path="cart" element={<Cart />}></Route>
        <Route path="orders" element={<Orders />}></Route>
        <Route path="register" element={<Register />}></Route>
      </Routes>
    </div>
  );
}

export default App;
