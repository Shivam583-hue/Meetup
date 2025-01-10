import { useLocalSearchParams } from "expo-router";
import { Text } from "react-native";
import events from '../assets/events.json';

export default function Event() {
  const { id } = useLocalSearchParams();
  const event = events.find((event) => event.id === id);
  return (
    <Text>{event?.title}</Text>
  )
}
