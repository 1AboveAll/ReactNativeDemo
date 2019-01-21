const INITIAL_STATE = {
    email: 'rawath54@gmail.com',
    password: '1234567',
    token: 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjVjNDM0NDdkZWJjZDg2MmM0MDJlNjJjZiIsImlhdCI6MTU0ODA1NzIyNSwiZXhwIjoxNTQ4MDYwODI1fQ.4ZfXozFE8q5D6lCM0N0JzbjBXEFwfF6qpbMHRXC7FKI',
    //token: ''
    name: '',
    releaseOn: ''
}

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {

        case 'updateEmail':
            return { ...state, email: action.playload };

        case 'updatePassword':
            return { ...state, password: action.playload };

        case 'updateToken':
            return { ...state, token: action.playload };

        case 'updateName': {
            return { ...state, name: action.playload }
        }

        case 'updateReleaseOn': {
            return { ...state, releaseOn: action.playload }
        }

        case 'resetAddMovie': {
            //console.warn("Reset")
            return { ...state, name: action.playload, releaseOn: action.playload }
        }

        default:
        //console.warn("Def")
            return state;
    }
}

