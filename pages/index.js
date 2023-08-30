import Link from "next/link";
import { getFeaturedEvents } from "../DUMMY_DATA";
import EventList from "../components/events/EventList";

const HomePage = () => {
  const featuredEvents = getFeaturedEvents();

  return (
    <div>
      <h1>HomePage</h1>
      <EventList items={featuredEvents} />
    </div>
  );
};

export default HomePage;
