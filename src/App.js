import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { AuthProvider } from './Components/authContext';
import { CartProvider } from './Components/CartContext';
import Navbar from './Components/Navbar';
import CartPage from './Components/CartPage';
import PaymentPage from './Components/PaymentPage';
import LoginPage from './Components/LoginPage';
import OurStoryComponent from './Components/OurStoryComponent';
import ProductList from './Components/ProductList';
import PrivateRoute from './Components/PrivateRoute';
import ContactUsPage from './Components/ContactUsPage';
import ProductListingPage from './Components/ProductListingPage';


function App() {
  return (
    <AuthProvider>
      <CartProvider>
        <Router basename='/Ecom'>
          <Navbar />
          <Routes>
            <Route path="/" element={<ProductList />} />
            <Route path="/cart" element={<PrivateRoute><CartPage /></PrivateRoute>} />
            <Route path="/payment" element={<PrivateRoute><PaymentPage /></PrivateRoute>} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/contact-us" element={<ContactUsPage />} />
            <Route path="/our-story" element={<OurStoryComponent />} />
            {/* Dynamic routes for Women's categories */}
            <Route path="/women/:categoryName" element={<ProductListingPage />} />

            {/* Dynamic routes for Men's categories */}
            <Route path="/men/:categoryName" element={<ProductListingPage />} />

            {/* If you have an "All Women" or "All Men" category that needs special handling
                or just filters all products for that gender, you'd add routes here.
                For now, "all" category will also use ProductListingPage. */}
            <Route path="/women/all" element={<ProductListingPage />} />
            <Route path="/men/all" element={<ProductListingPage />} />
          </Routes>
        </Router>
      </CartProvider>
    </AuthProvider>
  );
}

export default App;
