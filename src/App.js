import { Route, Routes } from "react-router";
import FooterLayout from "./Layout/GlobalLayout/FooterLayout";
import HeaderLayout from "./Layout/GlobalLayout/HeaderLayout";
import AboutUsPage from "./Pages/AboutUsPage";
import BlogDetailPage from "./Pages/BlogDetailPage";
import BlogPage from "./Pages/BlogPage";
import CartPage from "./Pages/CartPage";
import CheckoutPage from "./Pages/CheckoutPage";
import ContactPage from "./Pages/ContactPage";
import CourseDetailsPage from "./Pages/CourseDetailsPage";
import CoursePage from "./Pages/CoursePage";
import EventDetailsPage from "./Pages/EventDetailsPage";
import EventPage from "./Pages/EventPage";
import IndexPage from "./Pages/IndexPage";
import IndexPageThree from "./Pages/IndexPageThree";
import IndexPageTwo from "./Pages/IndexPageTwo";
import LoginRegisterPage from "./Pages/LoginRegisterPage";
import ShopPage from "./Pages/ShopPage";
import SingleProductPage from "./Pages/SingleProductPage";
import WishlistPage from "./Pages/WishlistPage";

function App() {
  return (
    <div id="body">
      <HeaderLayout />
      <main>
        <Routes>
          <Route path="/about" element={<AboutUsPage />} />
          <Route path="/blog-detail" element={<BlogDetailPage />} />
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/course-details" element={<CourseDetailsPage />} />
          <Route path="/course" element={<CoursePage />} />
          <Route path="/event-details" element={<EventDetailsPage />} />
          <Route path="/event" element={<EventPage />} />
          <Route path="/index-three" element={<IndexPageThree />} />
          <Route path="/index-two" element={<IndexPageTwo />} />
          <Route path="/login-register" element={<LoginRegisterPage />} />
          <Route path="/shop" element={<ShopPage />} />
          <Route path="/single-product" element={<SingleProductPage />} />
          <Route path="/wishlist" element={<WishlistPage />} />
          <Route path="/" element={<IndexPage />} />
        </Routes>
      </main>
      <FooterLayout />
    </div>
  );
}

export default App;
