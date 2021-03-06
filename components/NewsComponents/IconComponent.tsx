import React from 'react';
import { StyleSheet, View } from 'react-native';
import { Ionicons } from '@expo/vector-icons';
import { FontAwesome } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { MaterialIcons } from '@expo/vector-icons';

interface CategoryType {
  category: string;
}

export default function IconComponent({ category }: CategoryType): JSX.Element {
  const roadCategory = <FontAwesome name="road" size={34} color="#ad0f5c" />
  const reminderCategory = <FontAwesome name="info-circle" size={36} color="#5ba4fc" />
  const generalCategory = <Ionicons name="chatbubble-ellipses" size={34} color="#3A4276" />
  const weatherCategory = <MaterialCommunityIcons name="weather-cloudy-alert" size={37} color="#ffde59" />
  const transportCategory = <MaterialIcons name="emoji-transportation" size={36} color="#ee9a2f" />

  return (
    <View style={styles.container}>
      <View style={{ alignSelf: 'center', marginLeft: 12 }}>
        {category === 'General' && generalCategory}
        {category === 'Road-closures' && roadCategory}
        {category === 'Weather-warnings' && weatherCategory}
        {category === 'Transport-delays' && transportCategory}
        {category === 'Reminders' && reminderCategory}
      </View>
    </View>
  );
}


const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    flexDirection: 'row',
    paddingLeft: 8,
    borderRadius: 15,
  },
})
