import { View, Text, Image, Pressable } from 'react-native';
import dayjs from 'dayjs';
import { Feather } from '@expo/vector-icons';
import { Link } from 'expo-router';

export default function EventListItem({ event }) {
  return (
    <Link href={`${event.id}`} asChild>
      <Pressable className='pb-3  m-3 gap-3 border-b border-gray-200'>
        <View className='flex-row'>
          <View className='flex-1'>
            <Text className='text-lg font-semibold  uppercase text-amber-800'>
              {dayjs(event.datetime).format('ddd, D MMM')} · {dayjs(event.datetime).format('h:mm A')}
            </Text>
            <Text className='text-xl font-bold' numberOfLines={2}>{event.title}</Text>


            <Text className='text-gray-700'>{event.location}</Text>
          </View>

          {/*Event Image*/}
          <Image source={{ uri: event.image }} className='aspect-video w-2/5 rounded-xl' />
        </View>

        {/*Footer*/}
        <View className='flex-row gap-3'>
          <Text className='text-gray-700 mr-auto'>16 going</Text>
          <Feather name='share' size={20} color='gray' />
          <Feather name='bookmark' size={20} color='gray' />
        </View>
      </Pressable>
    </Link>
  )
}

