
import { StyleSheet } from 'react-native'
const color = {
    primary: '#02AE83',
    primaryDark: '#02AE83',
    colorAccent: '#FBB339'
}

const styles = StyleSheet.create({

    registerText: {
        color: 'white',
        marginLeft: 16,
        marginRight: 16,
        marginBottom: 8,
    },

    heading: {
        color: 'white',
        fontWeight: 'bold',
        margin: 20,
        fontSize: 30,
        textAlign: 'center'
    },

    input: {
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



export {
    color, styles

}