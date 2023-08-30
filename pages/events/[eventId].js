import { useRouter } from "next/router";
import { getEventById } from "../../DUMMY_DATA";

const EventPage = () => {
  const router = useRouter();

  const eventId = router.query.eventId;
  console.log(getEventById(eventId));

  return <h1>Single EventPage is up!</h1>;
};

export default EventPage;
