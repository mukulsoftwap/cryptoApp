import React from 'react';
import { SafeAreaView } from 'react-native-safe-area-context';
import { CryptoProvider } from './src/context/CryptoContext';
import HomeScreen from './src/screens/HomeScreen';

const App = () => (
  <CryptoProvider>
    <SafeAreaView style={{ flex: 1 }}>
      <HomeScreen />
    </SafeAreaView>
  </CryptoProvider>
);

export default App;
