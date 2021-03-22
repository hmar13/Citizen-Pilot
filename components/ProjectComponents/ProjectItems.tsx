import React from 'react';
import { StyleSheet } from 'react-native';
import { Card, Title, Paragraph } from 'react-native-paper';

interface ProjectItemsInterface {
  title: string;
  description: string;
  location: string;
  projectedCompletion: string;
  img: string;
}

const ProjectItems: React.FC<ProjectItemsInterface> = ({
  title,
  description,
  location,
  projectedCompletion,
  img,
}) => {
  return (
    <Card style={styles.container}>
      <Card.Content>
        <Title style={styles.title}>{title}</Title>
        <Paragraph style={styles.location}>Where? {location}</Paragraph>
        <Paragraph style={styles.progress}>
          Progress: {projectedCompletion}
        </Paragraph>
      </Card.Content>
    </Card>
  );
};

export default ProjectItems;

const styles = StyleSheet.create({
  container: {
    paddingHorizontal: 15,
    backgroundColor: 'white',
    borderRadius: 15,
    marginBottom: 15,
  },
  title: {
    textAlign: 'left',
  },
  location: {
    textAlign: 'left',
  },
  progress: {
    textAlign: 'right',
  },
});
