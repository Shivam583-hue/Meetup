import { Stack } from 'expo-router';
import EventListItem from '~/components/EventListItem';


import events from '../../assets/events.json';
const event = events[0];

export default function Events() {
  return (
    <>
      <Stack.Screen options={{ title: 'Events' }} />

      <EventListItem event={event} />
    </>
  );
}

