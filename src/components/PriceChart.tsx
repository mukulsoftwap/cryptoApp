import React, { useEffect, useState } from 'react';
import { View, ActivityIndicator, Text, StyleSheet } from 'react-native';
import { CartesianChart, Line, useChartPressState } from 'victory-native';
import { Circle } from '@shopify/react-native-skia';
import { useCrypto } from '../context/CryptoContext';

type ChartDataPoint = {
  time: number;
  price: number;
};

const PriceChart: React.FC = () => {
  const { cryptoState } = useCrypto();
  const [data, setData] = useState<ChartDataPoint[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const { state, isActive } = useChartPressState({
    x: 0,
    y: { price: 0 },
  });

  const fetchChartData = async () => {
    setLoading(true);
    setError(null);

    try {
      const res = await fetch(
        `https://api.coingecko.com/api/v3/coins/${cryptoState.selectedCard}/market_chart?vs_currency=usd&days=1`
      );
      const result = await res.json();

      console.log("result", result);

      const formattedData: ChartDataPoint[] = result.prices.map((item: number[]) => ({
        time: item[0],
        price: item[1],
      }));

      setData(formattedData);
    } catch (err) {
      setError('Failed to load chart data.');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (cryptoState.selectedCard) fetchChartData();
  }, [cryptoState.selectedCard]);

  if (error) return <Text style={styles.error}>{error}</Text>;

  return (
    <View style={styles.container}>
      {
        loading ? <ActivityIndicator size="large" color="#888" /> :
        <CartesianChart
          data={data}
          xKey="time"
          yKeys={['price']}
          chartPressState={state}
        >
          {({ points }) => (
            <>
              <Line points={points.price} color="#f0e605" strokeWidth={3} />
            </>
          )}
        </CartesianChart>
      }
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 250,
    width: '100%',
    padding: 10,
    backgroundColor: '#1b1c18',
    borderRadius: 12,
    justifyContent:'center'
  },
  error: {
    color: 'red',
    textAlign: 'center',
    padding: 16,
  },
});

export default PriceChart;
