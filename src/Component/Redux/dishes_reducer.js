import * as Actiontypes from './Actiontypes';

export const dishes_reducer =(state={isLoad:true,errMsg:null,dishes:[]}, action)=>{

    switch(action.type){
        case Actiontypes.ADD_DISHES:
            return {...state, dishes:action.payload, isLoad:false, errMsg:null}                
        case Actiontypes.DISHES_LOADING:{}
            return {...state, dishes:[], isLoad:true, errMsg:null}
        case Actiontypes.DISHES_FAILED:
            return {...state, dishes:[], isLoad:false, errMsg:action.payload}
        default:
            return state;
    }
        
}