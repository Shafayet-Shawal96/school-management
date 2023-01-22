import React, { useEffect, useRef, useState } from "react";
import SkeletonElements from "../../Components/Skeletons/SkeletonElements";
import useIsVisible from "../../Hooks/useIsVisible";
import EventCard from "./EventCard";

let currentPage = 1;

function EventAreaStoreLess() {
  const lastElementRef = useRef();
  const [pages, setPages] = useState([]);
  const isVisible = useIsVisible(lastElementRef);

  const updateEvents = async (pageNo) => {
    const sendRequest = async () => {
      const response = await fetch(
        `https://nodestaticserve.imdrashedul.repl.co/distribution/events/${pageNo}.json`
      );

      // console.log("Fetching pageNo", pageNo);

      if (!response.ok) {
        throw new Error("Receiving Events Data Failed");
      }

      const allEventsData = await response.json();
      setPages((prevState) => [...prevState, allEventsData]);
    };

    try {
      await sendRequest();
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    if (isVisible) {
      updateEvents(currentPage++);
    }
  }, [isVisible]);

  return (
    <div className="event-area pt-130 pb-130">
      <div className="container">
        {pages.map((allEvents, index) => (
          <div className="row" key={index} id={index}>
            {allEvents.length !== 0
              ? allEvents.map((singleEvent) => {
                  return (
                    <EventCard key={singleEvent.id} singleEvent={singleEvent} />
                  );
                })
              : ""}
          </div>
        ))}

        {currentPage < 4 ? <SkeletonElements ref={lastElementRef} /> : ""}
      </div>
    </div>
  );
}
// We can use React.memo for better loading this component
export default EventAreaStoreLess;
