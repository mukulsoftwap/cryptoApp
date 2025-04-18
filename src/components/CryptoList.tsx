import React from 'react';
import { FlatList, View } from 'react-native';
import { useCrypto } from '../context/CryptoContext';
import CryptoCard from './CryptoCard';

const CryptoList: React.FC = () => {
  const { cryptoState, dispatch } = useCrypto();

  return (
    <FlatList
      data={cryptoState.cryptos.filter((c:any) => !cryptoState.favorites.includes(c.id))}
      keyExtractor={item => item.id}
      renderItem={({ item }) => (
        <CryptoCard
          crypto={item}
          onPress={() => dispatch({ type: 'SET_SELECTED', payload: item.id })}
          toggleFavorite={() => dispatch({ type: 'TOGGLE_FAVORITE', payload: item.id })}
          isSelected={cryptoState.selectedCard === item.id}
          isFavorite={cryptoState.favorites.includes(item.id)}
        />
      )}
    />
  );
};

export default CryptoList;