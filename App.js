import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import ScreenHome from './src/views/ScreenHome';
import ScreenLogin from './src/views/ScreenLogin';
import store from './src/redux/store';
import { Provider } from 'react-redux';

const Stack = createNativeStackNavigator();

export default function App() {
  return (
    <Provider store = {store}>
    <NavigationContainer>
      <Stack.Navigator initialRouteName='ScreenLogin' screenOptions={{headerShown: false}}>
        <Stack.Screen name='ScreenLogin' component={ScreenLogin}/>
        <Stack.Screen name='ScreenHome' component={ScreenHome}/>
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
