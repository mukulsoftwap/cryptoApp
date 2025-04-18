import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { Crypto } from '../types/crypto';

interface Props {
  crypto: Crypto;
  onPress: () => void;
  toggleFavorite: () => void;
  isSelected: boolean;
  isFavorite: boolean;
}

const CryptoCard: React.FC<Props> = ({ crypto, onPress, toggleFavorite, isSelected, isFavorite }) => (
  <TouchableOpacity onPress={onPress} style={[styles.card, isSelected && styles.selected]}>
    <Image source={{ uri: crypto.image }} style={styles.image} />
    <View style={styles.info}>
      <Text style={styles.name}>{crypto.name}</Text>
      <Text>${crypto.current_price}</Text>
    </View>
    <TouchableOpacity onPress={toggleFavorite} style={styles.favoriteButton}>
      <Text style={styles.star}>{isFavorite ? '★' : '☆'}</Text>
    </TouchableOpacity>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  card: {
    flexDirection: 'row',
    padding: 12,
    margin: 8,
    borderRadius: 10,
    backgroundColor: '#eee',
    alignItems: 'center'
  },
  selected: {
    borderWidth: 2,
    borderColor: '#1e90ff',
  },
  image: {
    width: 32,
    height: 32,
    marginRight: 10,
  },
  info: {
    flex: 1,
  },
  name: {
    fontWeight: 'bold',
  },
  star: {
    fontSize: 18,
  },
  favoriteButton:{
    alignItems:'center',
    width:30,
    height:30
  }
});

export default CryptoCard;
