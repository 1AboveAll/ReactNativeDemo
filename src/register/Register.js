import React from 'react'
import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import { styles, color } from '../theme'

export default class Register extends React.Component {



    render() {
        return (
            <View style={styles.container}>

                <Text style={styles.heading}>Register</Text>

                <TextInput
                    placeholder='Full Name'
                    style={styles.input} />

                <TextInput
                    placeholder='Email Address'
                    style={styles.input} />

                <TextInput
                    placeholder='Password'
                    style={styles.input} />

                <TouchableOpacity >
                    <View style={styles.button}>
                        <Text style={styles.buttonText}>
                            REGISTER
                        </Text>
                    </View>

                </TouchableOpacity>

            </View>
        )
    }

}