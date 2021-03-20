import React, { useState } from 'react';
import { List } from 'react-native-paper';

export default function ListAccordion(): JSX.Element {
  const [expanded, setExpanded] = useState(false);

  const handlePress = () => setExpanded(!expanded);

  return (
    <List.Section>
      <List.Accordion
        title="Choose a category"
        expanded={expanded}
        onPress={handlePress}
        left={() => <List.Icon icon="star" />}
      >
        <List.Item onPress={handlePress} title="Roads and streets" />
        <List.Item onPress={handlePress} title="Transport" />
        <List.Item onPress={handlePress} title="Environment" />
        <List.Item onPress={handlePress} title="Sanitation" />
        <List.Item onPress={handlePress} title="Utilities" />
      </List.Accordion>
    </List.Section>
  );
}
