import React, { useState, SetStateAction } from 'react';
import { View, Text, Dimensions, StyleSheet } from 'react-native';
import { List, Colors } from 'react-native-paper';

interface CategoryTitle {
  setCategoryTitle: React.Dispatch<SetStateAction<string>>;
  categoryTitle: string;
}

export default function ListAccordion({
  setCategoryTitle,
  categoryTitle,
}: CategoryTitle): JSX.Element {
  const [expanded, setExpanded] = useState(false);
  const handleAccordionView = () => setExpanded(!expanded);

  const handlePress = (newTitle: string) => {
    setCategoryTitle(newTitle);
    setExpanded(!expanded);
  };

  return (
    <View
      style={[
        styles.category,
        expanded ? styles.accordionOpen : styles.accordionClosed,
      ]}
    >
      <Text style={styles.text}>Choose your location</Text>
      <List.Section>
        <List.Accordion
          title={categoryTitle}
          expanded={expanded}
          onPress={handleAccordionView}
          left={() => <List.Icon icon="star" color={Colors.blue500} />}
        >
          <List.Item onPress={() => handlePress('Downtown')} title="Downtown" />
          <List.Item
            onPress={() => handlePress('Suburban area 1')}
            title="Suburban area 1"
          />
          <List.Item
            onPress={() => handlePress('Suburban area 2')}
            title="Suburban area 2"
          />
          <List.Item
            onPress={() => handlePress('Suburban area 3')}
            title="Suburban area 3"
          />
          <List.Item
            onPress={() => handlePress('Suburban area 4')}
            title="Suburban area 4"
          />
        </List.Accordion>
      </List.Section>
    </View>
  );
}

const { height, width } = Dimensions.get('window');

const styles = StyleSheet.create({
  category: {
    backgroundColor: 'white',
    width: width - 30,
    alignSelf: 'center',
    borderRadius: 10,
    marginBottom: 7,
  },
  text: {
    fontWeight: 'bold',
    alignSelf: 'center',
    paddingTop: 10,
    marginBottom: -10,
  },
  accordionOpen: {
    height: height / 2,
  },
  accordionClosed: {
    height: height / 8,
  },
});
