import 'react-native-gesture-handler';
import React, { useState } from "react";
import {Image, View, Text, TextInput, TouchableOpacity, Keyboard, ScrollView}  from "react-native"
import MainPage1 from "./Components/MainPage1";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import BottomTab from './Components/BottomTab';
import HomePage from './Components/HomePage';
import {createBottomTabNavigator} from  "@react-navigation/bottom-tabs";
import Entypo from 'react-native-vector-icons/Entypo';
import Fontisto from 'react-native-vector-icons/Fontisto';
// import "./global.css"

const Tab=createBottomTabNavigator();
const Stack = createStackNavigator();


export const App = () => {
  return (
    <View>

      <Text>sadsa </Text>
    </View>
  )
}

// const App = () => {
//  return (
//    <View style={{flex:1,backgroundColor:"Red"}}>
//      {/* { <NavigationContainer>
//        <Stack.Navigator initialRouteName="BottomTab">
//          <Stack.Screen
//            name="Home"
//            component={MainPage1}
//            options={{ headerShown: false }}
//          />
//          <Stack.Screen
//            name="BottomTab"
//            component={BottomTab}
//            options={{ headerShown: false }}
//          />
//          <Stack.Screen
//            name="HomePage"
//         //    component={HomePage}
//            options={{ headerShown: false }}
//          >
//             {()=>(
//                 <Tab.Navigator
//                 screenOptions={{
//                   tabBarActiveTintColor: "black",
//                   tabBarInactiveTintColor: "grey",
//                   tabBarShowLabel: "false",
//                 }}
//               >
//                 <Tab.Screen
//                   name="Home"
//                   component={MainPage1}
//                   options={{
//                     headerShown: false,
//                     tabBarIcon: ({ color, size }) => (
//                       <Fontisto name="home" size={30} color={"black"} />
//                     ),
//                   }}
//                 />
//                 </Tab.Navigator>
//             )}
//          </Stack.Screen>
//        </Stack.Navigator>
//      </NavigationContainer> }
//      */}
//      <Text>Hello</Text>
//    </View>
//  );

// }


export default App;