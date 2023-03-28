import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';

import BoloChocolate from './bolochocolate';
import BoloFuba from './bolodefuba';
import BoloMilho from './bolodemilho';
import Home from './home'

const Stack = createStackNavigator();

export default function Rotas(){
  return(
<NavigationContainer>
  <Stack.Navigator>
    <Stack.Screen name="Home" component = {Home} />
    <Stack.Screen name="BoloChocolate" component = {BoloChocolate} />
    <Stack.Screen name="BoloFuba" component = {BoloFuba} />
    <Stack.Screen name="BoloMilho" component = {BoloMilho} />
  </Stack.Navigator>
</NavigationContainer>
)
}

