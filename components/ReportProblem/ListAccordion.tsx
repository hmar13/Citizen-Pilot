import React, { useState } from 'react';
import { List, Colors } from 'react-native-paper';

export default function ListAccordion(): JSX.Element {
  const [expanded, setExpanded] = useState(false);
  const [title, setTitle] = useState('Choose a category');

  const handleAccordionView = () => setExpanded(!expanded);

  const handlePress = (newTitle: string) => {
    setTitle(newTitle);
    setExpanded(!expanded);
  };

  return (
    <List.Section>
      <List.Accordion
        title={title}
        expanded={expanded}
        onPress={handleAccordionView}
        left={() => <List.Icon icon="star" color={Colors.blue500} />}
      >
        <List.Item
          onPress={() => handlePress('Roads and streets')}
          title="Roads and streets"
        />
        <List.Item onPress={() => handlePress('Transport')} title="Transport" />
        <List.Item
          onPress={() => handlePress('Environment')}
          title="Environment"
        />
        <List.Item
          onPress={() => handlePress('Sanitation')}
          title="Sanitation"
        />
        <List.Item onPress={() => handlePress('Utilities')} title="Utilities" />
      </List.Accordion>
    </List.Section>
  );
}
