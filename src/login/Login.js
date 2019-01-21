import React from 'react'
import { View, Text, TextInput, TouchableOpacity } from 'react-native'
import { styles } from '../theme';
import { connect } from "react-redux";
import {
    onChangeInputFields,
    onLogin
} from './../action';

class Login extends React.Component {
    Login() {
        const { email, password } = this.props;
        this.props.onLogin({ email, password });
    }
    render() {
        return (
            <View style={styles.container}>

                <Text style={styles.heading}>Login</Text>
                <TextInput
                    placeholder='Email Address'
                    style={styles.input}
                    onChangeText={(text) => this.props.onChangeInputFields('updateEmail', text)}
                />

                <TextInput
                    placeholder='Password'
                    style={styles.input}
                    onChangeText={(text) => this.props.onChangeInputFields('updatePassword', text)}
                />

                <TouchableOpacity onPress={this.Login.bind(this)}>
                    <View style={styles.button}>
                        <Text style={styles.buttonText}>
                            LOGIN
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
    }
}


export default connect(mapStateToProps, {
    onChangeInputFields,
    onLogin
})(Login);