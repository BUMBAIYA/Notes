import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';

type AddButtonProps = {
  handleClick: () => void;
};

export default function AddButton({ handleClick }: AddButtonProps) {
  return (
    <TouchableOpacity style={styles.addBtn}>
      <Text onPress={handleClick} style={styles.addBtnText}>
        +
      </Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  addBtn: {
    width: 30,
    height: 30,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    borderWidth: 2,
    borderColor: 'blue',
    borderRadius: 15,
  },
  addBtnText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: 'blue',
  },
});
