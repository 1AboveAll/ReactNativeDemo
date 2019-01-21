import React from 'react'
import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import { styles } from '../theme'
import { connect } from "react-redux";
import {
    onChangeInputFields,
    onRegister
} from './../action';

class Register extends React.Component {

    registerClick() {
        const { fullName, email, password } = this.props;
        if(fullName === ''){
            console.warn("Email Empty")
            return
        }
        if(email === ''){
            console.warn("Email Empty")
            return
        }
        if(password === ''){
            console.warn("Password Empty")
            return
        }
        this.props.onRegister({ fullName, email, password });
    }


    render() {
        return (
            <View style={styles.container}>

                <Text style={styles.heading}>Register</Text>

                <TextInput
                    placeholder='Full Name'
                    style={styles.input}
                    onChangeText={(text) => this.props.onChangeInputFields('updateFullName', text)} />

                <TextInput
                    placeholder='Email Address'
                    style={styles.input}
                    onChangeText={(text) => this.props.onChangeInputFields('updateEmail', text)} />

                <TextInput
                    placeholder='Password'
                    style={styles.input}
                    secureTextEntry = {true}
                    password = {true}
                    onChangeText={(text) => this.props.onChangeInputFields('updatePassword', text)} />

                <TouchableOpacity onPress={this.registerClick.bind(this)}>
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

const mapStateToProps = state => {
    return {
        email: state.Home.email,
        password: state.Home.password,
        fullName: state.Home.fullName
    }
}

export default connect(mapStateToProps, {
    onChangeInputFields,
    onRegister
})(Register);