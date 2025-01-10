import { useLocalSearchParams, Stack } from "expo-router";
import { Text, View, Image, Pressable } from 'react-native';
import dayjs from 'dayjs';
import events from '../assets/events.json';

export default function Event() {
  const { id } = useLocalSearchParams();
  const event = events.find((event) => event.id === id);

  if (!event) {
    return <Text>Event not found</Text>
  }

  return (
    <View className="bg-white p-3 flex-1">
      <Stack.Screen
        options={{ title: 'Event', headerTintColor: 'black' }}
      />
      <Image source={{ uri: event.image }} className=" w-full aspect-video  rounded-xl" />
      <Text className="text-3xl font-bold" numberOfLines={2}>
        {event.title}
      </Text>
      <Text className="text-lg font-semibold uppercase text-amber-800">
        {dayjs(event.datetime).format('ddd, D MMM')} · {dayjs(event.datetime).format('h:mm A')}
      </Text>

      <Text className="text-lg font-bold">{event.location}</Text>

      <Text className="text-lg" numberOfLines={2}>
        {event.description}
      </Text>


      {/*Footer*/}
      <View className="absolute bottom-0 left-0 right-0 flex-row items-center justify-between border-t-2 border-gray-300 p-5 pb-10">
        <Text className="text-xl font-semibold">Free</Text>
        <Pressable className="rounded-md bg-red-500 p-5 px-8">
          <Text className="text-lg font-bold text-white">Join and RSVP</Text>
        </Pressable>
      </View>
    </View>
  )
}
