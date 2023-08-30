import EventItem from "./EventItem";

const EventList = ({ items }) => {
  return (
    <ul>
      {items.map((event) => (
        <EventItem
          id={event.id}
          title={event.title}
          image={event.image}
          location={event.location}
          date={event.date}
          key={event.id}
        />
      ))}
    </ul>
  );
};

export default EventList;
