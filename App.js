
import { StyleSheet, Text, View } from 'react-native';
import store from './src/store';
import "./src/store"
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Provider } from 'react-redux';
import HomeScreen from './src/pages/HomeScreen';

const Stack=createNativeStackNavigator()
export default function App() {
  return (
<Provider store={store}>
    <NavigationContainer initialRouteName="Home">
    <Stack.Navigator>
      <Stack.Screen name="Home" component={HomeScreen} options={{headerShown:false}}/>
    </Stack.Navigator>
  </NavigationContainer>
  </Provider>
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
