import React from 'react'
import { View, Text, StyleSheet, TextInput, TouchableOpacity } from 'react-native'
import { styles } from '../theme';
import {onAddMovie,onChangeInputFields} from './../action'
import { connect } from "react-redux";

class AddMovie extends React.Component {

    onAdd(){ 
        const { name, releaseOn,token } = this.props;
        this.props.onAddMovie({ name, releaseOn,token });
    }

    render() {
        return (
            <View style={styles.container}>

                <Text style={styles.heading}>Add Movie !</Text>
                <TextInput
                    placeholder='Name'
                    style={styles.input} 
                    onChangeText={(text) => this.props.onChangeInputFields('updateName', text)}/>

                <TextInput
                    placeholder='Release Date'
                    style={styles.input} 
                    onChangeText={(text) => this.props.onChangeInputFields('updateReleaseOn', text)}/>

                <TouchableOpacity onPress = {this.onAdd.bind(this)} >
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

const mapStateToProps = state => {
    return {
        name: state.Home.name,
        releaseOn: state.Home.releaseOn,
        token: state.Home.token
    }
}
export default connect(mapStateToProps, {
    onChangeInputFields,
    onAddMovie
})(AddMovie);