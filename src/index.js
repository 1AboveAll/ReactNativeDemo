import React from 'react'
import Login from './login/Login'
import AddMovie from './add_movie/AddMovie'
import ViewMovies from './view_movies/ViewMovies'
import {color} from "./theme"

import {createAppContainer,createStackNavigator, createBottomTabNavigator} from 'react-navigation'
const Movies = createBottomTabNavigator({
    Movies: {screen: ViewMovies},
    Add: {screen: AddMovie}
})

const AppContainer = createAppContainer(Movies)


export default AppContainer