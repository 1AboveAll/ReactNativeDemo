import React from 'react'
import  {View,Text,StyleSheet} from 'react-native'

export default class ViewMovies extends React.Component{
    static navigationOptions = {
        headerTitle: 'Home',
      };
    render(){
        return (
            <View>
                <Text>Hello From Movies</Text>
            </View>
        )
    }
}