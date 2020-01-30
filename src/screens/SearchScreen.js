import React, { useState } from 'react';
import { View, Text, StyleSheet, ScrollView } from 'react-native';
import SearcBar from '../components/SearchBar';
import useResult from '../hooks/useResults';
import ResultsList from '../components/ResultList';

const SearchScreen = () => {
  const [term, setTerm] = useState('');
  const [searchApi, results, errorMessage] = useResult();

  const filters = fileterRestaurantByPrice(results);

  return (
    <>
      <SearcBar
        term={term}
        onTermChange={setTerm}
        onTermSubmit={() => searchApi(term)}
      />
      {errorMessage ? <Text>{errorMessage}</Text> : undefined}
      <ScrollView>
        <ResultsList results={filters['$']} title="Cost Effective" />
        <ResultsList results={filters['$$']} title="Bit Pricier" />
        <ResultsList results={filters['$$$']} title="Big Spender" />
      </ScrollView>
    </>
  );
};

const fileterRestaurantByPrice = results => {
  const filters = results.reduce((acc, value) => {
    switch (value.price) {
      case '$':
        acc[value.price]
          ? (acc[value.price] = [...acc[value.price], value])
          : (acc[value.price] = [value]);
        return acc;
      case '$$':
        acc[value.price]
          ? (acc[value.price] = [...acc[value.price], value])
          : (acc[value.price] = [value]);
        return acc;
      case '$$$':
        acc[value.price]
          ? (acc[value.price] = [...acc[value.price], value])
          : (acc[value.price] = [value]);
        return acc;
      default:
        return acc;
    }
  }, {});
  return filters;
};

const style = StyleSheet.create({});

export default SearchScreen;
