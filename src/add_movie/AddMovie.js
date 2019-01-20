import React from 'react'
import  {View,Text,StyleSheet,TextInput,TouchableOpacity} from 'react-native'
import { color } from '../theme';

export default class AddMovie extends React.Component{

    render(){
        return (
            <View style={styles.container}>
                
                <Text style={styles.heading}>Add Movie !</Text>
                <TextInput
                placeholder='Name'
                style={styles.input} />
                
                <TextInput 
                placeholder='Date'
                style={styles.input} />

                <TouchableOpacity >
                    <View style={styles.button}>
                        <Text style={styles.buttonText}>
                            ADD
                        </Text>
                    </View>

                </TouchableOpacity>
                
            </View>
        )
    }


}
const styles = StyleSheet.create({
    heading:{
        color: 'white',
        fontWeight: 'bold',
        margin: 20,
        fontSize: 30,
        textAlign: 'center'
    },

    input:{
        backgroundColor: 'white',
        marginLeft: 16,
        marginRight: 16,
        marginBottom: 8,
        borderColor: color.primaryDark
    },
    container: {
        backgroundColor: color.primary,
        flex: 1,
        justifyContent: 'center'
    },

    button: {
        justifyContent: 'center',
        height: 50,
        marginLeft: 16,
        marginRight: 16,
        marginBottom: 8,
        backgroundColor: color.colorAccent
    },

    buttonText: {
        color: 'white',
        fontWeight: 'bold',
        textAlign: 'center'
    }

})