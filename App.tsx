import React, { useState } from 'react';
import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  TextInput,
  FlatList,
} from 'react-native';
import uuid from 'react-native-uuid';
import AddButton from '@/components/AddButton';
import NoteCard, { Note } from '@/components/NoteCard';

type NoteData = Omit<Note, 'handleDelete'>;

export default function App(): JSX.Element {
  const [noteName, setNoteName] = useState('');
  const [notes, setNotes] = useState<NoteData[]>([]);

  const handleAddNote = () => {
    if (noteName === '') {
      return;
    }
    const note: NoteData = {
      id: uuid.v4() as string,
      title: noteName,
    };
    setNotes((prev) => [...prev, note]);
    setNoteName('');
  };

  const handleDeleteNote = (id: string) => {
    setNotes((prev) => prev.filter((note) => note.id !== id));
  };

  return (
    <SafeAreaView style={styles.appContainer}>
      <View style={styles.headerContainer}>
        <View style={styles.headerWrapper}>
          <Text style={styles.headerText}>Create</Text>
          <AddButton handleClick={handleAddNote} />
        </View>
        <TextInput
          style={styles.addNoteInput}
          value={noteName}
          onChangeText={setNoteName}
          placeholder="New note"
        />
      </View>
      <View style={styles.notesContainer}>
        <Text style={styles.headerText}>Notes</Text>
        <View>
          <FlatList
            data={notes}
            renderItem={({ item }) => (
              <NoteCard
                id={item.id}
                title={item.title}
                handleDelete={handleDeleteNote}
              />
            )}
            keyExtractor={(note) => note.id}
          />
        </View>
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  appContainer: {
    flex: 1,
    backgroundColor: '#f1f5f9',
    gap: 20,
  },
  headerContainer: {
    backgroundColor: '#fff',
    padding: 20,
    gap: 15,
    borderBottomWidth: 1,
    borderBottomColor: '#d4d4d8',
  },
  headerWrapper: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  headerText: {
    fontSize: 20,
    fontWeight: 'bold',
    color: '#000',
  },
  addNoteInput: {
    borderWidth: 1,
    borderColor: '#a1a1aa',
    borderRadius: 8,
    paddingHorizontal: 18,
    paddingVertical: 10,
  },
  notesContainer: {
    flex: 1,
    backgroundColor: '#fff',
    borderTopWidth: 1,
    borderBottomWidth: 1,
    borderColor: '#d4d4d8',
    padding: 20,
  },
});
