import { Crypto } from '../types/crypto';

export interface CryptoState {
  cryptos: Crypto[];
  favorites: string[];
  selectedCard: string;
}

export type Action =
  | { type: 'SET_CRYPTOS'; payload: Crypto[] }
  | { type: 'TOGGLE_FAVORITE'; payload: string }
  | { type: 'SET_SELECTED'; payload: string }
  | { type: 'SET_FAVORITES'; payload: string[] };