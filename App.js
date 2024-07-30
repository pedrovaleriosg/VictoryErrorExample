import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { VictoryChart, VictoryLine, VictoryTheme, VictoryVoronoi } from 'victory-native';

export default function App() {
  const data = [{ x: 1, y: 2 }, { x: 2, y: 3 }, { x: 3, y: 5 }]
  return (
    <View style={styles.container}>
      <VictoryChart width={350} theme={VictoryTheme.material}>
        <VictoryLine data={data} />
        <VictoryVoronoi data={data} style={{ data: { stroke: "red", strokeWidth: 1 } }} size={10} />
      </VictoryChart>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
