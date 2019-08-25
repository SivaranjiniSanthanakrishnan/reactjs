


import * as Actiontypes from './Actiontypes';


export const promotions_reducer =(state={isLoad:true, errMsg:'',promos:[]}, action)=>{
    switch(action.type){
        case Actiontypes.ADD_PROMOS:
            return {...state, promos:action.payload, isLoad:false, errMsg:null}                
        case Actiontypes.LOAD_PROMOS:
            return {...state, promos:[], isLoad:true, errMsg:null}
        case Actiontypes.PROMOS_FAILED:
            return {...state, promos:[], isLoad:false, errMsg:action.payload}
        default:
            return state;
    }        
}