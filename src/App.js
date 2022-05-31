import { Route, Routes } from "react-router-dom";
import MainHeader from "./Components/MainHeader";
import Search from './Pages/Search'
import Products from './Pages/Products'
import ProductDetail from './Pages/ProductDetail'
import Welcome from './Pages/Welcome'
import Contact from './Pages/Contact'
import AboutUs from './Pages/AboutUs'
import Error from './Pages/Error'


function App() {
  return (
    <>
      <MainHeader />
    <main>
      <Routes>
      <Route path="/" element={<Search />} />
      <Route path="/products" element={<Products />} />
      <Route path="/products/:productId" element={<ProductDetail />} />
      <Route path="/welcome" element={<Welcome />} />
      <Route path="/contact" element={<Contact />} />
      <Route path="/about" element={<AboutUs />} />
        <Route path="/*" element={<Error />} />

      </Routes>
      </main>
    </>
  );
}

export default App;
