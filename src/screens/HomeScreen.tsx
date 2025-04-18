import React from 'react';
import { StyleSheet, Text } from 'react-native';
import Favorites from '../components/Favorites';
import CryptoList from '../components/CryptoList';
import PriceChart from '../components/PriceChart';

const HomeScreen: React.FC = () => (
  <>
    <Text style={styles.title}>Top Cryptos</Text>
    <PriceChart />
    <Favorites />
    <CryptoList />
  </>
);

const styles = StyleSheet.create({
  title: { 
    fontSize: 18, 
    fontWeight: 'bold', 
    padding: 16, 
    color:'#FFF' 
  },
  error: {
    color: 'red',
    textAlign: 'center',
    padding: 16,
  },
});

export default HomeScreen;
