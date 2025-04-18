import React, { createContext, useContext, useEffect, useReducer } from 'react';
import { cryptoReducer } from './cryptoReducer';
import { CryptoState } from './types';
import { Crypto } from '../types/crypto';
import AsyncStorage from '@react-native-async-storage/async-storage';

const CRYPTO_BASE_URL = 'https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd';

const initialState: CryptoState = {
  cryptos: [],
  favorites: [],
  selectedCard: 'bitcoin',
};

const CryptoContext = createContext<any>(null);

export const useCrypto = () => useContext(CryptoContext);

export const CryptoProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [cryptoState, dispatch] = useReducer(cryptoReducer, initialState);

  useEffect(() => {
    fetchData();

    const interval = setInterval(() => {
      fetchData();
    }, 30000);

    return () => clearInterval(interval);
  }, []);

  const fetchData = async () => {
    const response = await fetch(`${CRYPTO_BASE_URL}&order=market_cap_desc&per_page=12&page=1`);
    const data: Crypto[] = await response.json();
    dispatch({ type: 'SET_CRYPTOS', payload: data });

    const favs = await AsyncStorage.getItem('favorites');
    if (favs) dispatch({ type: 'SET_FAVORITES', payload: JSON.parse(favs) });
  };

  return (
    <CryptoContext.Provider value={{ cryptoState, dispatch }}>
      {children}
    </CryptoContext.Provider>
  );
};
