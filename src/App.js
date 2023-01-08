import { Route, Routes } from "react-router";
import FooterLayout from "./Layout/FooterLayout";
import HeaderLayout from "./Layout/HeaderLayout";
import IndexPage from "./Pages/IndexPage";
import AboutUsPage from "./Pages/AboutUsPage";
import ShopPage from "./Pages/ShopPage";
import BlogPage from "./Pages/BlogPage";
import ContactPage from "./Pages/ContactPage";
import CartPage from "./Pages/CartPage";
import CheckoutPage from "./Pages/CheckoutPage";
import CourseDetailsPage from "./Pages/CourseDetailsPage";
import CoursePage from "./Pages/CoursePage";
// import EventPage from "./Pages/EventPage ";
import IndexPageThree from "./Pages/IndexPageThree";
import IndexPageTwo from "./Pages/IndexPageTwo";
import LoginRegisterPage from "./Pages/LoginRegisterPage";
import SingleProductPage from "./Pages/SingleProductPage";
import WishlistPage from "./Pages/WishlistPage";
import EventPage from "./Pages/EventPage";
// import WishlistPage from "./Pages/WishlistPage";

function App() {
  return (
    <div>
      {/* <HeaderLayout /> */}
      <Routes>
        <Route path="/about" element={<AboutUsPage />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/checkout" element={<CheckoutPage />} />
        <Route path="/course-details" element={<CourseDetailsPage />} />
        <Route path="/course" element={<CoursePage />} />
        {/* <Route path="/event-details" element={<EventDetailsPage />} /> */}
        <Route path="/event" element={<EventPage />} />
        <Route path="/index-three" element={<IndexPageThree />} />
        <Route path="/index-two" element={<IndexPageTwo />} />
        <Route path="/Login-register" element={<LoginRegisterPage />} />
        <Route path="/single-product" element={<SingleProductPage />} />
        <Route path="/wishlist" element={<WishlistPage />} />
        <Route path="/" element={<IndexPage />} />
      </Routes>
      {/* <FooterLayout /> */}
    </div>
  );
}

export default App;
