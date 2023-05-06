import { Pressable, StyleSheet, Text } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

import { Colors } from '../../constants/colors';

function OutlinedButton({ onPress, icon, children }) {
  return (
    <Pressable
      style={({ pressed }) => [styles.button, pressed && styles.pressed]}
      onPress={onPress}
    >
      <Ionicons
        style={styles.icon}
        name={icon}
        size={18}
        color={Colors.primary500}
      />
      <Text style={styles.text}>{children}</Text>
    </Pressable>
  );
}

export default OutlinedButton;

const styles = StyleSheet.create({
  button: {
    alignItems: 'center',
    borderColor: Colors.primary500,
    borderWidth: 1,
    flexDirection: 'row',
    justifyContent: 'center',
    margin: 4,
    paddingHorizontal: 12,
    paddingVertical: 6,
  },
  pressed: {
    opacity: 0.7,
  },
  icon: {
    marginRight: 6,
  },
  text: {
    color: Colors.primary500,
  },
});
