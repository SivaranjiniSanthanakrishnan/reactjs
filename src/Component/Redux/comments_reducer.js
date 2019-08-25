


import * as Actiontypes from './Actiontypes';

export const comments_reducer =(state={isLoad:true, errMsg:'',comments:[]}, action)=>{
   
    switch(action.type){
        case Actiontypes.ADD_COMMENT:
            {
                var comment = action.payload;
        
        return { ...state, comments: state.comments.concat(comment)}
            }
        case Actiontypes.ADD_COMMENTS:
            return {...state, comments:action.payload, isLoad:false, errMsg:null}
        case Actiontypes.COMMENT_FAILED:
            return {...state, comments:[], isLoad:false, errMsg:action.payload} 
        default:
            return state;
    }        
}