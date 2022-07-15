import React from 'react';
import { SafeAreaView, Text, View } from 'react-native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import { NavigationContainer } from '@react-navigation/native';

import Favourites from './pages/Favourites';
import Details from './pages/Details';
import Jobs from './pages/Jobs/Jobs';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

const drawerScreenOptions = {
  headerTitleStyle: { color: 'white' },
  headerTitleAlign: 'center',
  headerStyle: {
    backgroundColor: '#FF5C58',
  },
  headerTintColor: 'white',
  
}
function Router() {

  const JobStack = () => {
    return (
      <Stack.Navigator  >
        <Stack.Screen name="Jobs" component={Jobs} options={drawerScreenOptions} />
        <Stack.Screen name="DetailsScreen" component={Details} options={drawerScreenOptions} />
      </Stack.Navigator>
    )
  }
  return (
    <NavigationContainer>
      <Drawer.Navigator screenOptions={drawerScreenOptions}>
        <Drawer.Screen name="Jobs " component={JobStack} options={{ headerShown: false }} />
        <Drawer.Screen name="Favourites" component={Favourites} />
      </Drawer.Navigator>
    </NavigationContainer>

  )
}


export default Router;
