import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import SkeletonElements from "../../Components/Skeletons/SkeletonElements";
import useIsVisible from "../../Hooks/useIsVisible";
import { updateEventState } from "../../Store/EventsSlice";
import EventCard from "./EventCard";

let currentPage = 1;

function EventArea() {
  const dispatch = useDispatch();
  const lastElementRef = useRef();
  const allEvents = useSelector((state) => state.eventsSlice.allEvents);
  const isVisible = useIsVisible(lastElementRef);
  console.log("Event Area");

  useEffect(() => {
    const timer = setTimeout(() => {
      if (isVisible) {
        dispatch(updateEventState(currentPage++));
      }
    }, 5000);
    return () => clearTimeout(timer);
  }, [dispatch, isVisible]);

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
export default EventArea;
