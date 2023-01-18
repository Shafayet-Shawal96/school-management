import React, { useEffect, useRef, useState } from "react";
import SkeletonElements from "../../Components/Skeletons/SkeletonElements";
import useIsVisible from "../../Hooks/useIsVisible";
import EventCard from "./EventCard";

let currentPage = 1;

function EventAreaStoreLess() {
  const lastElementRef = useRef();
  const [allEvents, setAllEvents] = useState([]);
  const isVisible = useIsVisible(lastElementRef);
  console.log(allEvents);

  const updateEvents = async (pageNo) => {
    const sendRequest = async () => {
      const response = await fetch(
        `https://education-hub-12ebb-default-rtdb.firebaseio.com/allEvents/0/allEvents-page-${pageNo}.json`
      );

      console.log("Fetching pageNo", pageNo);

      if (!response.ok) {
        throw new Error("Receiving Events Data Failed");
      }

      const allEventsData = await response.json();
      setAllEvents((prevState) => [...prevState, ...allEventsData]);
    };

    try {
      await sendRequest();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      if (isVisible) {
        updateEvents(currentPage++);
      }
    }, 5000);
    return () => clearTimeout(timer);
  }, [isVisible]);

  return (
    <div className="event-area pt-130 pb-130">
      <div className="container">
        <div className="row">
          {allEvents.length !== 0
            ? allEvents.map((singleEvent) => {
                return (
                  <EventCard key={singleEvent.id} singleEvent={singleEvent} />
                );
              })
            : ""}
          {currentPage < 4 ? <SkeletonElements ref={lastElementRef} /> : ""}
        </div>
      </div>
    </div>
  );
}
// We can use React.memo for better loading this component
export default EventAreaStoreLess;
