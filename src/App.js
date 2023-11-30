import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import NavbarPage from "./Components/Navbar";
import Product from "./Components/Product";
import store from "./redux/store";
import { Provider } from "react-redux";
import CartPage from "./Components/cart";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <BrowserRouter>
          <NavbarPage />
          <Routes>
            <Route path="/Product" element={<Product />} />
            <Route path="/cart" element={<CartPage />} />
          </Routes>
        </BrowserRouter>
      </div>
    </Provider>
  );
}

export default App;