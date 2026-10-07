import EventsList from '../components/EventsList';

function EventsPage() {
  return (
    <>
      <EventsList />
    </>
  );
}

export default EventsPage;

export async function eventsLoader() {
  const response = await fetch('http://localhost:8080/events');

  if (!response.ok) {
    // ...
  } else {
    return response;
  }
}