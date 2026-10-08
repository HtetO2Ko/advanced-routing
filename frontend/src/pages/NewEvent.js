import { data, redirect } from 'react-router-dom';
import EventForm from "../components/EventForm";

function NewEventPage() {
  return <EventForm />
}

export default NewEventPage;

export async function action({ request, params }) {
  const Fdata = await request.formData();

  const eventData = {
    title: Fdata.get('title'),
    image: Fdata.get('image'),
    date: Fdata.get('date'),
    description: Fdata.get('description'),
  }

  const response = await fetch('http://localhost:8080/events', {
    method: 'POST',
    headers: {
      'Content-Type': "application/json"
    },
    body: JSON.stringify(eventData),
  });

  if (response.status === 422) {
    return response;
  }

  if (!response.ok) {
    throw data({ message: 'Could not save event.' },
      { status: 500 }
    )
  }
  return redirect('/events');
}