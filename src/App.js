import "./App.css";
import Landing from "./Components/Landing";
import { Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Fav from "./Components/Page/Fav";
import FoodList from "./Components/FoodList";
import Login from "./Components/Page/Login";
import Signin from "./Components/Page/Signin";
import SingleProduct from "./Components/Page/SingleProduct";

function App() {
  return (
    <div clasName="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/fav" element={<Fav />} />
        <Route path="/foodlist" element={<FoodList />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signin" element={<Signin />} />
        <Route path="/singleproduct" element={<SingleProduct />} />
        
      </Routes>
    </div>
  );
}

export default App;
