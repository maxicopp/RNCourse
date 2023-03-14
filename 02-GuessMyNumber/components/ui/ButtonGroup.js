import React from 'react';
import { View, StyleSheet } from 'react-native';
import PrimaryButton from './PrimaryButton';

function ButtonGroup({ buttonData }) {
  const renderButton = ({ label, onPress }) => (
    <View style={styles.buttonContainer}>
      <PrimaryButton onPress={onPress}>{label}</PrimaryButton>
    </View>
  );

  return (
    <View style={styles.buttonsContainer}>
      {buttonData.map((button) => (
        <React.Fragment key={button.id}>{renderButton(button)}</React.Fragment>
      ))}
    </View>
  );
}

export default ButtonGroup;

const styles = StyleSheet.create({
  buttonsContainer: {
    flexDirection: 'row',
  },
  buttonContainer: {
    flex: 1,
  },
});
