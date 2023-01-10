
const reducer = (state = {token: false, type: "", queryData: []}, action) =>{
    // console.log(action)
    switch (action.type) {
        case 'AUTHTOKEN':
            state = {...state, token: action.payload};
            return state;
        case 'GETTOKEN':
            return state;
        case 'DELETETOKEN':
            state = {token: false, type: ""};
            return state;
        case 'USERTYPE':
            state = {...state, type: action.payload};
            return state;
        case 'QUERYTABLE':
            state = {...state, queryData : action.payload}
            return state;
        default:
            return false;
    }
}

export default reducer;