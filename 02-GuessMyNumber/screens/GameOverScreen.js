import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import Title from '../components/ui/Title';
import Colors from '../constants/colors';

function GameOverScreen() {
  return (
    <View style={styles.rootContainer}>
      <Title>GAME OVER!</Title>
      <View style={styles.imageContainer}>
        <Image
          style={styles.image}
          source={require('../assets/images/success.png')}
        />
      </View>
      <Text>Your phone needed X rounds to guess the number Y.</Text>
    </View>
  );
}

export default GameOverScreen;

const styles = StyleSheet.create({
  rootContainer: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
    padding: 24,
  },
  imageContainer: {
    borderColor: Colors.primary800,
    borderRadius: 150,
    borderWidth: 3,
    height: 300,
    margin: 36,
    overflow: 'hidden',
    width: 300,
  },
  image: {
    height: '100%',
    width: '100%',
  },
});
