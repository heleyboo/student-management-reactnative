import React from 'react';
import {
  createBottomTabNavigator,
  createStackNavigator,
  createDrawerNavigator
} from 'react-navigation';


import FIcon from 'react-native-vector-icons/FontAwesome5';
import * as Screens from './screens';

const MainApp = createBottomTabNavigator({
  Home: {
    screen: Screens.GridMenu,
    navigationOptions: {
      tabBarLabel: "Trang chủ",
      tabBarIcon: ({ focused, tintColor }) => (<FIcon name="home" size={25} color={tintColor} />),
    }
  },
  Account: {
    screen: Screens.Account,
    navigationOptions: {
      tabBarLabel: "Tài khoản",
      tabBarIcon: ({ focused, tintColor }) => (<FIcon name="user-circle" size={25} color={tintColor} />)
    }
  },
  Setting: {
    screen: Screens.Setting,
    navigationOptions: {
      tabBarLabel: "Cài đặt",
      tabBarIcon: ({ focused, tintColor }) => (<FIcon name="sliders-h" size={25} color={tintColor} />)
    }
  }

},
  {
    initialRouteName: "Home",
    tabBarOptions: {
      activeTintColor: '#f4aa42',
      inactiveTintColor: '#9b9b9b',
      style: {
        backgroundColor: '#ffffff'
      }
    }
  }
);

const SidebarNavigator = createDrawerNavigator(
  {
    Home: { 
      screen: Screens.GridMenu ,
      navigationOptions: {
        tabBarLabel: "Cài đặt",
        tabBarIcon: ({ focused, tintColor }) => (<FIcon name="cog" size={25} color={tintColor} />),
      }
    },
    Setting: { 
      screen: Screens.Setting
    },
    Account: { screen: Screens.Account }
  }
);

const StudentManagementStack = createStackNavigator({
  First: {
    screen: Screens.SplashScreen,
  },
  MainApp: {
    screen: SidebarNavigator
  },
},
  {
    headerMode: 'none',
  }
);



export default StudentManagementStack;
