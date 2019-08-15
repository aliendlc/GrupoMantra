import React, { Component } from "react";
import { createStackNavigator, createAppContainer, createBottomTabNavigator, createSwitchNavigator,  } from 'react-navigation';
import SignIn from "./src/screens/SignIn";
import Main from "./src/screens/Main";
import ControlRp from "./src/screens/ControlRp";
import Estadisticas from "./src/screens/Estadisticas";
import Loading from "./src/screens/Loading";
import Reservas from "./src/screens/Reservas";
import Cuenta from "./src/screens/Reservas";

const HomeStack = createStackNavigator({
    Home: {
        screen: createBottomTabNavigator({
            Loading: {
                screen: Loading,
            },
            Home: {
                screen: Home,
            },
            SignIn: {
              screen: SignIn
            },
        })
    }
})

const SignedInStack = createStackNavigator({
      Reservas: {
          screen: SignIn,
      },
      Cuenta: {
          screen: SignUp
      },
});

const AdminStack = createStackNavigator({
      ControlRp: {
          screen: ControlRp,
      },
      Estadisticas: {
          screen: ShowPhoto
      },
});

const Reserved= createAppContainer(createSwitchNavigator(
    {
        HomeStack: HomeStack,
        SignedInStack: SignedInStack,
        AdminStack: AdminStack
    },
    {
        initialRouteName: 'HomeStack'
    }
));

console.log('ROUTES CONSOLE LOG');
export default createAppContainer(Reserved);
