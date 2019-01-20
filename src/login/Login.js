import React from 'react'
import  {View,Text,StyleSheet} from 'react-native'
import { color } from '../theme';

export default class Login extends React.Component{
    static navigationOptions = {
        headerTitle: 'Home',
        headerStyle:{
            backgroundColor: color.primary
        }

      };

    render(){
        return (
            <View>
                <Text>Hello From Login</Text>
            </View>
        )
    }
}