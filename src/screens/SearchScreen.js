import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import SearcBar from '../components/SearchBar';

const SearchScreen = () => {
  const [term, setTerm] = useState('');
  return (
    <View>
      <SearcBar
        term={term}
        onTermChange={newTerm => setTerm(newTerm)}
        onTermSubmit={() => console.log('klk tu dice')}
      />
      <Text>Search Screen</Text>
    </View>
  );
};

const style = StyleSheet.create({});

export default SearchScreen;
