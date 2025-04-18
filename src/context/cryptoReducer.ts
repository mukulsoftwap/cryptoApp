import { Action, CryptoState } from './types';
import AsyncStorage from '@react-native-async-storage/async-storage';

export const cryptoReducer = (cryptoState: CryptoState, action: Action): CryptoState => {
  switch (action.type) {
    case 'SET_CRYPTOS':
      return { ...cryptoState, cryptos: action.payload };
    case 'TOGGLE_FAVORITE':
      const updated = cryptoState.favorites.includes(action.payload)
        ? cryptoState.favorites.filter(id => id !== action.payload)
        : [...cryptoState.favorites, action.payload];
      AsyncStorage.setItem('favorites', JSON.stringify(updated));
      return { ...cryptoState, favorites: updated };
    case 'SET_SELECTED':
      return { ...cryptoState, selectedCard: action.payload };
    case 'SET_FAVORITES':
      return { ...cryptoState, favorites: action.payload };
    default:
      return cryptoState;
  }
};
