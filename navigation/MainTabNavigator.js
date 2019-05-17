import React from 'react';
import { Platform } from 'react-native';
import { createStackNavigator, createBottomTabNavigator } from 'react-navigation';

import TabBarIcon from '../components/TabBarIcon';
import HomeScreen from '../screens/HomeScreen';
import ProductsScreen from '../screens/ProductsScreen';
import SingleProductScreen from '../screens/SingleProductScreen';
import CartScreen from '../screens/CartScreen';
import ProfilScreen from '../screens/ProfilScreen';
import FormScreen from '../screens/FormScreen';
import LoginScreen from '../screens/LoginScreen';
import SignupScreen from '../screens/SignupScreen';

const HomeStack = createStackNavigator(
   {
    Home: {
      screen: HomeScreen,
    },
    Login: {
      screen: LoginScreen,
    },
    Signup: {
      screen: SignupScreen,
    }
  },
);

HomeStack.navigationOptions = {
  tabBarLabel: 'Home',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-home${focused ? '' : '-outline'}`
          : 'md-home'
      }
    />
  ),
  barTintColor: '#000',
};

const ProductsStack = createStackNavigator({
  Products: ProductsScreen,
  SingleProduct: SingleProductScreen,
});

ProductsStack.navigationOptions = {
  tabBarLabel: 'Brands',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? `ios-list${focused ? '' : '-outline'}` : 'md-list'}
    />
  ),
};

const CartStack = createStackNavigator({
  Cart: CartScreen,
});

CartStack.navigationOptions = {
  tabBarLabel: 'Cart',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? `ios-cart${focused ? '' : '-outline'}` : 'md-cart'}
    />
  ),
};

const ProfilStack = createStackNavigator({
  Profil: ProfilScreen,
});

ProfilStack.navigationOptions = {
  tabBarLabel: 'Profil',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={
        Platform.OS === 'ios'
          ? `ios-contact${focused ? '' : '-outline'}`
          : 'md-contact'
      }
    />
  ),
};

const FormStack = createStackNavigator({
  Form: FormScreen,
  SingleProduct: SingleProductScreen,
});

FormStack.navigationOptions = {
  tabBarLabel: 'Form',
  tabBarIcon: ({ focused }) => (
    <TabBarIcon
      focused={focused}
      name={Platform.OS === 'ios' ? `ios-list${focused ? '' : '-outline'}` : 'md-list'}
    />
  ),
};

export default createBottomTabNavigator({
  FormStack,
  HomeStack,
  ProductsStack,
  CartStack,
  ProfilStack
},
{
  tabBarOptions: {
    activeTintColor: '#5F1F6D',
    inactiveTintColor: 'gray',
  },
});
