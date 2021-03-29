/* eslint-disable @typescript-eslint/explicit-module-boundary-types */
import React, { useEffect, useRef } from 'react';
import { Button, StyleSheet, View } from 'react-native';
import LottieView from 'lottie-react-native';

export default function App() {
  // componentDidMount() {
  //   this.animation.play(1, 60);
  const animation = useRef(null);
  //   // Or set a specific startFrame and endFrame with:
  //   // this.animation.play(30, 120);
  // }
  useEffect(() => {
    animation.current.play(1, 60);
  }, []);

  const resetAnimation = () => {
    animation.current.reset();
    animation.current.play();
  };

  return (
    <View style={styles.animationContainer}>
      <LottieView
        ref={animation}
        style={{
          width: 100,
          height: 100,
          backgroundColor: 'white',
        }}
        loop={false}
        source={require('../assets/animations/15145-ok-sign.json')}
        // OR find more Lottie files @ https://lottiefiles.com/featured
        // Just click the one you like, place that file in the 'assets' folder to the left, and replace the above 'require' statement
      />
      <View style={styles.buttonContainer}>
        <Button title="Restart Animation" onPress={resetAnimation} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  animationContainer: {
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
  },
  buttonContainer: {
    paddingTop: 20,
  },
});
