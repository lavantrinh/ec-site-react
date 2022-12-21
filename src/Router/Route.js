import { Route, Routes } from "react-router-dom";
import Home from '../Page/Home';
import Error from '../Page/Error';
import SmartPhone from '../Page/SmartPhone'
import Tablet from '../Page/Tablet'
import Laptop from '../Page/Laptop'
import SmartWatch from '../Page/SmartWatch'
import AboutUs from '../Page/AboutUs'
import Contact from '../Page/Contact'
import ProductDetail from '../Page/ProductDetail'

import AdminPage from "../Page/AdminPage";
import AdminAddProduct from "../Page/AdminAddProduct";


let routes = (
  <Routes>
    <Route path="/" element={<Home />} />
    <Route path="/dien-thoai" element={<SmartPhone />} />
    <Route path="/may-tinh-bang" element={<Tablet />} />
    <Route path="/laptop" element={<Laptop />} />
    <Route path="/dong-ho" element={<SmartWatch />} />
    <Route path="/about" element={<AboutUs />} />
    <Route path="/contact" element={<Contact />} />
    <Route path="/dong-ho" element={<SmartWatch />} />
    <Route path="/products/:id" element={<ProductDetail />} />
    <Route path="/admin" element={<AdminPage />} />
<Route path="/admin/add-new-product" element={<AdminAddProduct />} />
    <Route path="*" element={<Error />} />
  </Routes>
);

export { routes };
