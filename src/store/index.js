import {createStore} from 'redux';

const userDat ={
    user : "none", profile: "none"
}

const reducerFn = (state = userDat, action) =>{

    switch(action.type){

   

        case "USER":
            return {...userDat, user: action.payload.user, profile: action.payload.profile};
        case "DP":
            return {...userDat, profile: action.payload}
        default:
            return state;






    }


};

const store = createStore(reducerFn);


export default store;