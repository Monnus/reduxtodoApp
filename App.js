import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import store from './src/store';
import { Provider } from 'react-redux';
import Login from './src/pages/login';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import app from './firebaseconfig';
import Signin from './src/pages/Signin';
import HomeScreen from "./src/pages/HomeScreen"

const Stack = createNativeStackNavigator();
export default function App() {
  return (
    <Provider store={store}>
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Signup" component={Signin} options={{headerShown:false}}/>
        <Stack.Screen name="login" component={Login} options={{headerShown:false}}/>
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
