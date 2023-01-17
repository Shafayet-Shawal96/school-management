import { Route, Routes } from "react-router";
import FooterLayout from "./Layout/GlobalLayout/FooterLayout";
import HeaderLayout from "./Layout/GlobalLayout/HeaderLayout";
import NoticesPage from "./Pages/NoticesPage";
import ContactPage from "./Pages/ContactPage";
import CoursePage from "./Pages/CoursePage";
import EventDetailsPage from "./Pages/EventDetailsPage";
import EventPage from "./Pages/EventPage";
import IndexPage from "./Pages/IndexPage";
import NoticeDetailsPage from "./Pages/NoticeDetailsPage";
import CourseDetails from "./Pages/CourseDetailsPage";
import LoginPage from "./Pages/LoginPage";
import { useDispatch } from "react-redux";
import { setUIState } from "./Store/UISlice";
import { useEffect } from "react";

function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(setUIState());
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
          <Route path="/course" element={<CoursePage />} exact />
          <Route path="/course-details" element={<CourseDetails />} />
          <Route path="/notices" element={<NoticesPage />} exact />
          <Route path="/notices/:noticeId" element={<NoticeDetailsPage />} />
        </Routes>
      </main>
      <FooterLayout />
    </div>
  );
}

export default App;
