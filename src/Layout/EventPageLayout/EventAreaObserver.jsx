import React, { useEffect, useState } from "react";
import { useInView, InView } from "react-intersection-observer";
import SkeletonElements from "../../Components/Skeletons/SkeletonElements";
import EventCard from "./EventCard";

let currentPage = 1;
let rowNum = [];

const checkUpdateEvents = async (pageNo) => {
  const sendRequest = async () => {
    const response = await fetch(
      `https://nodestaticserve.imdrashedul.repl.co/distribution/events/update/${pageNo}.json`
    );

    // console.log("Fetching pageNo", pageNo);

    if (!response.ok) {
      throw new Error("Receiving Events Data Failed");
    }

    const allEventsUpdateStatus = await response.json();
    return allEventsUpdateStatus;
  };

  try {
    await sendRequest();
  } catch (error) {
    console.log(error);
  }

  return;
};

function EventAreaObserver() {
  const [pages, setPages] = useState([]);
  const { ref, inView, entry } = useInView();

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
    if (inView) {
      updateEvents(currentPage++);
    }
  }, [inView]);

  const checkRowNum = (id) => {
    if (rowNum[id] !== undefined) {
      const currentTime = new Date();
      if (currentTime.getTime() - rowNum[id].getTime() > 15000) {
        const newData = checkUpdateEvents(id + 1);
        if (newData) {
        }
      }
      rowNum[id] = new Date();
    } else {
      rowNum[id] = new Date();
    }
  };

  return (
    <div className="event-area pt-130 pb-130">
      <div className="container">
        {pages.map((allEvents, index) => (
          <InView
            as="div"
            key={index}
            id={index}
            className="row"
            onChange={(inView, entry) => {
              if (inView) {
                checkRowNum(Number(entry.target.id));
              }
            }}
          >
            {allEvents.length !== 0
              ? allEvents.map((singleEvent) => {
                  return (
                    <EventCard key={singleEvent.id} singleEvent={singleEvent} />
                  );
                })
              : ""}
          </InView>
        ))}
        {currentPage < 4 ? <SkeletonElements ref={ref} /> : ""}
      </div>
    </div>
  );
}
// We can use React.memo for better loading this component
export default EventAreaObserver;
