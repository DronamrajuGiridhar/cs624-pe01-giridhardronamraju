
import { StyleSheet, Text, View } from 'react-native';

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.message}>Giridhar Gopikrishna Dronamraju</Text>
      <Text style={styles.message}>MSCS</Text>
      <Text style={styles.message}>
        City University of Seattle (STC)
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'yellow',
    alignItems: 'center',
    justifyContent: 'center',
  },
  message: {
    color: 'black',
    fontSize: 18,
    textAlign: 'center',
  },
});
