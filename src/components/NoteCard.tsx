import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';

export type Note = {
  id: string;
  title: string;
  handleDelete: (id: string) => void;
};

export default function NoteCard({ id, title, handleDelete }: Note) {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>{title}</Text>
      <View style={styles.toolsWrapper}>
        <TouchableOpacity onPress={() => handleDelete(id)}>
          <Text style={styles.deleteBtnText}>🗑️</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 15,
    marginTop: 20,
    borderWidth: 1,
    borderColor: 'blue',
    borderRadius: 8,
  },
  title: {
    fontSize: 16,
    fontWeight: '500',
    color: '#000',
  },
  deleteBtn: {
    width: 30,
    height: 30,
    borderWidth: 1,
    borderRadius: 15,
    borderColor: 'red',
    justifyContent: 'center',
    alignItems: 'center',
  },
  toolsWrapper: {
    display: 'flex',
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
  deleteBtnText: {
    fontSize: 22,
    fontWeight: 'bold',
    color: 'red',
  },
});
