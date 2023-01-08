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
    <div>
      <Routes>
        <Route path="about" element={<AboutUsPage />} />
        <Route path="blog-detail" element={<BlogDetailPage />} />
        <Route path="blog" element={<BlogPage />} />
        <Route path="cart" element={<CartPage />} />
        <Route path="checkout" element={<CheckoutPage />} />
        <Route path="contact" element={<ContactPage />} />
        <Route path="course-detail" element={<CourseDetailsPage />} />
        <Route path="course" element={<CoursePage />} />
        <Route path="about" element={<EventDetailsPage />} />
        <Route path="event" element={<EventPage />} />
        <Route path="index" element={<IndexPage />} />
        <Route path="index-three" element={<IndexPageThree />} />
        <Route path="index-two" element={<IndexPageTwo />} />
        <Route path="login-register" element={<LoginRegisterPage />} />
        <Route path="shop" element={<ShopPage />} />
        <Route path="single-product" element={<SingleProductPage />} />
        <Route path="wishlist" element={<WishlistPage />} />
      </Routes>
    </div>
  );
}

export default App;
