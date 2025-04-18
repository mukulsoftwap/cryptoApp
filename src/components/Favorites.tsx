import React from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';
import { useCrypto } from '../context/CryptoContext';
import CryptoCard from './CryptoCard';

const Favorites: React.FC = () => {
    const { cryptoState, dispatch } = useCrypto();

    const renderListItem = ({ item }:any)=>{

      const onCardClick = ()=>{
        dispatch({ type: 'SET_SELECTED', payload: item.id })
      }

      const favoriteClick = ()=>{
        dispatch({ type: 'TOGGLE_FAVORITE', payload: item.id })
      }

      return(
        <CryptoCard
          crypto={item}
          onPress={onCardClick}
          toggleFavorite={favoriteClick}
          isSelected={cryptoState.selectedCard === item.id}
          isFavorite={true}
        />
      )
    }

    return (
      <View style={styles.container}>
        <FlatList
          data={cryptoState.cryptos.filter((c:any) => cryptoState.favorites.includes(c.id))}
          horizontal
          keyExtractor={item => item.id}
          renderItem={renderListItem}
          ListEmptyComponent={
            <View  style={styles.emptyText}>
              <Text style={styles.text}>No Favorite yet Click on '☆' to add as Favorite</Text>
            </View>
          }
        />
      </View>
      
    );
  };

  const styles = StyleSheet.create({
    container: {
      height: 80,
    },
    emptyText:{
      textAlign:'center',
      justifyContent:'center',
      paddingLeft:30
    },
    text:{
      color:"#fff"
    }
  });
  
  export default Favorites;
  