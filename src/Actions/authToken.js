export function addToken(tokendata){
    return{
        type: 'AUTHTOKEN',
        payload : tokendata
    }
}

export function getAuthToken(){
    return{
        type: 'GETTOKEN',
    }
}

export function deleteToken(){
    return{
        type: 'DELETETOKEN',
    }
}

export function userType(userType){
    // console.log('from action', userType)
    return{
        type: 'USERTYPE',
        payload : userType
    }
}

export function queryTable(data){
    return{
        type: 'QUERYTABLE',
        payload : data
    }
}