
import * as Actiontypes from './Actiontypes';

export const leaders_reducer =(state={isLoad:true, errMsg:'',leaders:[]}, action)=>{
    switch(action.type){
        case Actiontypes.ADD_LEADERS:
            return {...state, leaders:action.payload, isLoad:false, errMsg:null}                
        case Actiontypes.LOAD_LEADERS:
            return {...state, leaders:[], isLoad:true, errMsg:null}
        case Actiontypes.LEADERS_FAILED:
            return {...state, leaders:[], isLoad:false, errMsg:action.payload}
        default:
            return state;
    }        
}