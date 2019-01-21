import NavigationService from './../../NavigationService';
import {BASE_URL} from './../url'

export const onLogin = ({ email, password }) => {

    var data = "email="+encodeURIComponent(email)+"&password="+password;

    return (dispatch) => {
        fetch(BASE_URL+"/users/authenticate", {
            method: 'POST',
            body: data,
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        }).then(res => res.json())
            .then(response => {
                if (response.status == 'error') {
                    console.warn('invalid User');
                } else if (response.status == 'success') {
                    dispatch({
                        type: 'updateToken',
                        playload: response.data.token
                    })
                    NavigationService.Logout('AddMovie');
                }
            })
            .catch(error => console.error('Error:', error));
    };
};

export const onRegister = ({fullName,email,password}) => {
    var data = "name="+encodeURIComponent(fullName)+"&email="+encodeURIComponent(email)+"&password="+password;
    return (dispatch) => {
        fetch(BASE_URL+"/users/register",{
            method: "POST",
            body: data,
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            }
        }).then(res => res.json())
            .then(response => {
                if(response.status == 'success'){
                    dispatch(onLogin({email,password}))
                }
            }).catch(error => console.error('Error:',error))
    }
}

export const onAddMovie = ({name,releaseOn,token}) => {
    var data = "name="+encodeURIComponent(name)+"&released_on="+releaseOn;
    return (dispatch) => {
        fetch(BASE_URL+"/movies", {
            method: 'POST',
            body: data,
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded',
                'x-access-token': token
            }
        }).then(res => res.json())
            .then(response => {
                if (response.status == 'error') {
                    console.warn('invalid User');
                } else if (response.status == 'success') {
                    console.warn(name+" "+response.message);
                    dispatch({
                        type: 'resetAddMovie',
                        playload: ''
                    })
                
                }
            })
            .catch(error => console.error('Error:', error));
    };
}

export const onChangeInputFields = (type, text) => {
    return {
        type: type,
        playload: text
    };
};
