import React, { useState } from 'react';

import {
  StyleSheet,
  Text,
  View,
  FlatList,
  TouchableOpacity,
} from 'react-native';
import { IconButton, Colors, Menu } from 'react-native-paper';

interface category {
  sortCategory: any;
}

export default function SortByCategory({ sortCategory }: category): JSX.Element {
  const [isMenuVisible, setIsMenuVisible] = useState(false);

  const openMenu = () => setIsMenuVisible(true);
  const closeMenu = () => setIsMenuVisible(false);

  const handleMenuPress = (categoryName: string) => {
    sortCategory(categoryName)
    closeMenu();
  }

  return (
    <View
      style={{ alignSelf: 'flex-end', marginRight: 25 }}>
      <Menu
        visible={isMenuVisible}
        onDismiss={closeMenu}
        anchor={<IconButton icon="sort-bool-ascending" color={Colors.pink600} onPress={openMenu}>Show menu</IconButton>}>
        <Menu.Item onPress={() => handleMenuPress('General')} title="General" />
        <Menu.Item onPress={() => handleMenuPress('Reminders')} title="Reminders" />
        <Menu.Item onPress={() => handleMenuPress('Weather warnings')} title="Weather warnings" />
        <Menu.Item onPress={() => handleMenuPress('Transport delays')} title="Transport delays" />
        <Menu.Item onPress={() => handleMenuPress('Road closures')} title="Road closures" />
        <Menu.Item onPress={() => handleMenuPress('All')} title="All" />
      </Menu>
    </View>
  )

}
