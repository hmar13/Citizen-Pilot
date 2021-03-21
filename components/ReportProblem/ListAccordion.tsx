import React, { useState } from 'react';
import { View, Text, Dimensions, StyleSheet } from 'react-native';
import { List, Colors } from 'react-native-paper';

export default function ListAccordion({ setCategoryTitle, categoryTitle }): JSX.Element {
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
      <Text style={styles.text}>First, choose a category</Text>
      <List.Section>
        <List.Accordion
          title={categoryTitle}
          expanded={expanded}
          onPress={handleAccordionView}
          left={() => <List.Icon icon="star" color={Colors.blue500} />}
        >
          <List.Item
            onPress={() => handlePress('Roads and streets')}
            title="Roads and streets"
          />
          <List.Item
            onPress={() => handlePress('Transport')}
            title="Transport"
          />
          <List.Item
            onPress={() => handlePress('Environment')}
            title="Environment"
          />
          <List.Item
            onPress={() => handlePress('Sanitation')}
            title="Sanitation"
          />
          <List.Item
            onPress={() => handlePress('Utilities')}
            title="Utilities"
          />
        </List.Accordion>
      </List.Section>
    </View>
  );
}

const { height } = Dimensions.get('window');
const { width } = Dimensions.get('window');

const styles = StyleSheet.create({
  category: {
    backgroundColor: 'white',
    width: width - 20,
    alignSelf: 'center',
    borderRadius: 10,
    marginBottom: 7,
    marginTop: 16,
  },
  text: {
    fontWeight: 'bold',
    alignSelf: 'center',
    paddingTop: 10,
    marginBottom: -10,
  },
  accordionOpen: {
    height: height / 2.2,
  },
  accordionClosed: {
    height: height / 8,
  },
});
