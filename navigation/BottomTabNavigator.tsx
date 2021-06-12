/**
 * Learn more about createBottomTabNavigator:
 * https://reactnavigation.org/docs/bottom-tab-navigator
 */

import { Ionicons, Feather, MaterialIcons } from '@expo/vector-icons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createStackNavigator } from '@react-navigation/stack';
import * as React from 'react';

import Colors from '../constants/Colors';
import useColorScheme from '../hooks/useColorScheme';
import TabOneScreen from '../screens/TabOneScreen';
import TabTwoScreen from '../screens/StatusScreen';
import { BottomTabParamList, TabOneParamList, TabTwoParamList } from '../types';
import ChatsScreen from '../screens/ChatsScreen';
import CallsScreen from '../screens/CallsScreen';
import StatusScreen from '../screens/StatusScreen';

const MainTab = createBottomTabNavigator<BottomTabParamList>();

export default function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <MainTab.Navigator
      initialRouteName="TabOne"
      tabBarOptions={{
        activeTintColor: Colors.dark.text,
        style: {
          backgroundColor: Colors[colorScheme].tint
        },
        labelStyle: {
          fontWeight: 'bold'
        }
      }}>
      <MainTab.Screen
        name="Timeline"
        component={TabOneNavigator}
        options={{
          tabBarIcon: ({ color }) => <MaterialIcons name="timeline" size={24} color="black" />,
        }}
      />
      <MainTab.Screen
        name="Chats"
        component={ChatsScreen}
        options={{
          tabBarIcon: ({ color }) => <Ionicons name="chatbubbles-outline" size={26} color="black" />,
        }}
      />
      <MainTab.Screen
        name="Status"
        component={StatusScreen}
        options={{
          tabBarIcon: ({ color }) => <MaterialIcons name="update" size={24} color="black" />,
        }}
      />
      <MainTab.Screen
        name="Calls"
        component={CallsScreen}
        options={{
          tabBarIcon: ({ color }) => <Feather name="phone-call" size={24} color="black" />,
        }}
      />
    </MainTab.Navigator>
  );
}

// You can explore the built-in icon families and icons on the web at:
// https://icons.expo.fyi/
function TabBarIcon(props: { name: React.ComponentProps<typeof Ionicons>['name']; color: string }) {
  return <Ionicons size={30} style={{ marginBottom: -3 }} {...props} />;
}

// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
const TabOneStack = createStackNavigator<TabOneParamList>();

function TabOneNavigator() {
  return (
    <TabOneStack.Navigator>
      <TabOneStack.Screen
        name="TabOneScreen"
        component={TabOneScreen}
        options={{ headerTitle: 'Tab One Title' }}
      />
    </TabOneStack.Navigator>
  );
}

