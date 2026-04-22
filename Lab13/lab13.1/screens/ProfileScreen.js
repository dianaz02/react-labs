import { View, Text, Button, StyleSheet } from 'react-native';

export default function ProfileScreen({ route, navigation }) {
  const { userId } = route.params;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Profile Screen</Text>
      <Text style={styles.text}>User ID: {userId}</Text>

      <Button title="Go Back" onPress={() => navigation.goBack()} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#1e293b',
  },
  title: {
    fontSize: 24,
    color: 'white',
  },
  text: {
    color: '#38bdf8',
    marginVertical: 10,
  },
});