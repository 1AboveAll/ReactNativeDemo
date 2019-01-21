import React from 'react'
import Login from './login/Login'
import AddMovie from './add_movie/AddMovie'
import ViewMovies from './view_movies/ViewMovies'
import Register from './register/Register'
import {color} from "./theme"

import {createAppContainer,createStackNavigator, createBottomTabNavigator} from 'react-navigation'


const Tabbed = createBottomTabNavigator({
    'Login': {screen: Login},
    'Register': {screen: Register}
})



const Container = createStackNavigator({
    Home: { screen: AddMovie },
    AddMovies: {screen: Tabbed}
    
    }, {
      headerMode: 'none',
      navigationOptions: {
        headerVisible: false,
      }
    });



const AppContainer = createAppContainer(Container)


export default AppContainer