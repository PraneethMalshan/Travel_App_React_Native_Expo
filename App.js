import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { useFonts } from 'expo-font';
import * as Splashscreen from "expo-splash-screen";
import { useCallback } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { CountryDetails, Faild, HotelDetails, HotelList, HotelSearch, Onboarding, Payments, PlaceDetails, Recommended, Search, SelectedRoom, SelectRoom, Settings, Successfull } from './screens';
import BottomTabNavigation from './navigation/BottomTabNavigation';


const Stack = createNativeStackNavigator();

// const onLayoutRootView = useCallback(async () => {

// })

export default function App() {

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen name='Onboard' component={Onboarding} options={ {headerShown: false}}/>
        <Stack.Screen name='Bottom' component={BottomTabNavigation} options={ {headerShown: false}}/>
        <Stack.Screen name='Search' component={Search} options={ {headerShown: false}}/>
        <Stack.Screen name='CountryDetails' component={CountryDetails} options={ {headerShown: false}}/>
        <Stack.Screen name='Recommended' component={Recommended} options={ {headerShown: false}}/>
        <Stack.Screen name='PlaceDetails' component={PlaceDetails} options={ {headerShown: false}}/>
        <Stack.Screen name='HotelDetails' component={HotelDetails} options={ {headerShown: false}}/>
        <Stack.Screen name='HotelList' component={HotelList} options={ {headerShown: false}}/>
        <Stack.Screen name='HotelSearch' component={HotelSearch} options={ {headerShown: false}}/>
        <Stack.Screen name='SelectRoom' component={SelectRoom} options={ {headerShown: false}}/>
        <Stack.Screen name='Payments' component={Payments} options={ {headerShown: false}}/>
        <Stack.Screen name='Success' component={Successfull} options={ {headerShown: false}}/>
        <Stack.Screen name='Faild' component={Faild} options={ {headerShown: false}}/>
        <Stack.Screen name='Settings' component={Settings} options={ {headerShown: false}}/>
        <Stack.Screen name='SelectedRoom' component={SelectedRoom} options={ {headerShown: false}}/>
      </Stack.Navigator>
    </NavigationContainer>
  );
}

