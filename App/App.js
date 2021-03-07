import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import Tabs from './navigation/Tabs';
import {Home, Restaurant, OrderDelivery} from './screen_container';

const Stack = createStackNavigator();

const App = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Home" component={Tabs} />
        <Stack.Screen name="Restaurant" component={Restaurant} />
        <Stack.Screen name="OrderDelivery" component={OrderDelivery} />
      </Stack.Navigator>
    </NavigationContainer>
  );
};

export default App;
