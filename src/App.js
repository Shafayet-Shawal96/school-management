import { Route, Routes } from "react-router";
import FooterLayout from "./Layout/GlobalLayout/FooterLayout";
import HeaderLayout from "./Layout/GlobalLayout/HeaderLayout";
import BlogPage from "./Pages/BlogPage";
import ContactPage from "./Pages/ContactPage";
import CoursePage from "./Pages/CoursePage";
import EventDetailsPage from "./Pages/EventDetailsPage";
import EventPage from "./Pages/EventPage";
import IndexPage from "./Pages/IndexPage";
import BlogDetailPage from "./Pages/BlogDetailPage";
import CourseDetails from "./Pages/CourseDetailsPage";
import LoginRegisterPage from "./Pages/LoginRegisterPage";

function App() {
  return (
    <div id="body">
      <HeaderLayout />
      <main>
        <Routes>
          <Route path="/blog" element={<BlogPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/course" element={<CoursePage />} />
          <Route path="/event-details" element={<EventDetailsPage />} />
          <Route path="/event" element={<EventPage />} />
          <Route path="/course-details" element={<CourseDetails />} />
          <Route path="/blog-details" element={<BlogDetailPage />} />
          <Route path="/login-register" element={<LoginRegisterPage />} />
          <Route path="/" element={<IndexPage />} />
        </Routes>
      </main>
      <FooterLayout />
    </div>
  );
}

export default App;
