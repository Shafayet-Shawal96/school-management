import { Route, Routes } from "react-router";
import { useDispatch } from "react-redux";
import { updateUISate } from "./Store/UISlice";
import { useEffect } from "react";

import FooterLayout from "./Layout/GlobalLayout/FooterLayout";
import HeaderLayout from "./Layout/GlobalLayout/HeaderLayout";
import NoticesPage from "./Pages/NoticesPage";
import ContactPage from "./Pages/ContactPage";
import CoursesPage from "./Pages/CoursesPage";
import EventDetailsPage from "./Pages/EventDetailsPage";
import EventPage from "./Pages/EventPage";
import IndexPage from "./Pages/IndexPage";
import NoticeDetailsPage from "./Pages/NoticeDetailsPage";
import CourseDetails from "./Pages/CourseDetailsPage";
import LoginPage from "./Pages/LoginPage";
import NotFoundPage from "./Pages/NotFoundPage";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(updateUISate());
  }, [dispatch]);

  return (
    <div id="body">
      <HeaderLayout />
      <main>
        <Routes>
          <Route path="/" element={<IndexPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="/events" element={<EventPage />} exact />
          <Route path="/events/:eventId" element={<EventDetailsPage />} />
          <Route path="/courses" element={<CoursesPage />} exact />
          <Route path="/courses/:courseId" element={<CourseDetails />} />
          <Route path="/notices" element={<NoticesPage />} exact />
          <Route path="/notices/:noticeId" element={<NoticeDetailsPage />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </main>
      <FooterLayout />
    </div>
  );
}

export default App;
