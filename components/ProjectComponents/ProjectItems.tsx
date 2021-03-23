import React, { useState } from 'react';
import {
  StyleSheet,
  TouchableOpacity,
  View,
  Text,
  Button,
  Image,
} from 'react-native';
import Modal from 'react-native-modal';
import { AnimatedCircularProgress } from 'react-native-circular-progress';

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
  const [isModalVisible, setModalVisible] = useState(false);
  const toggleModal = () => {
    setModalVisible(!isModalVisible);
  };
  // needed number without % for progress bar
  let projectProgress = +projectedCompletion.slice(0, -1);

  return (
    <View>
      <TouchableOpacity onPress={toggleModal}>
        <View style={styles.container}>
          <View>
            <Image
              style={styles.banner}
              source={require('../../assets/images/banner.png')}
            />
          </View>
          <View style={styles.secondColumn}>
            <View style={{ marginBottom: 15 }}>
              <Text style={styles.title}>{title}</Text>
            </View>
            <View>
              <Text style={styles.location}>Location: {location}</Text>
            </View>
            <AnimatedCircularProgress
              style={styles.progress__container}
              size={40}
              width={10}
              fill={projectProgress}
              tintColor="#5ba4fc"
              backgroundColor="#3A4276">
              {
                (fill) => (
                  <Text style={{ fontSize: 9 }}>
                    { projectedCompletion}
                  </Text>
                )
              }
            </AnimatedCircularProgress>
          </View>
        </View>
      </TouchableOpacity>
      <Modal isVisible={isModalVisible}>
        <View style={styles.modal__container}>
          <View style={styles.modal__information__container}>
            <Text>{title}</Text>
            <Image style={styles.image} source={{ uri: img }} />
            <Text>Information: {description}</Text>
            <Text>Location: {location}</Text>
            <Text>Progress: </Text>
          </View>
          <Button title="Hide" onPress={toggleModal} />
        </View>
      </Modal>
    </View>
  );
};

export default ProjectItems;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    flexDirection: 'row',
    height: 100,
    paddingBottom: 12,
    borderRadius: 15,
    marginBottom: 12,
    shadowColor: '#000',
    shadowOffset: { width: 2, height: 2 },
    shadowOpacity: 2,
    shadowRadius: 1,
    elevation: 3,
  },
  secondColumn: {
    justifyContent: 'space-around',
    marginTop: 10,
    paddingRight: 4,
    marginLeft: '8%',
    width: '75%',
    height: '90%',
  },
  banner: {
    borderBottomLeftRadius: 15,
    borderTopLeftRadius: 15,
    height: 100,
    width: 50,
  },
  title: {
    fontSize: 17,
    fontWeight: 'bold',
  },
  location: {
    fontSize: 12,
    fontStyle: 'italic',
  },
  progress__container: {
    alignSelf: 'flex-end',
    justifyContent: 'flex-end',
  },
  progress: {
    marginTop: 5,
  },
  modal__container: {
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: 'white',
    paddingHorizontal: 20,
    borderRadius: 15,
  },
  image: {
    height: 200,
    width: 200,
  },
  modal__information__container: {
    alignItems: 'center',
  },
});
