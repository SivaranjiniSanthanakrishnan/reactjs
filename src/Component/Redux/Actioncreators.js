


import * as Actiontypes from './Actiontypes';

export const addComment = (comment)=>({
    
    type:Actiontypes.ADD_COMMENT,
    payload:comment
})

export const postComment = (dishId, rating, author, comment) => (dispatch) => {

    const newComment = {
        dishId: dishId,
        rating: rating,
        author: author,
        comment: comment
    };
    newComment.date = new Date().toISOString();
    
    return fetch(Actiontypes.BASE_URL + 'comments', {
        method: "POST",
        body: JSON.stringify(newComment),
        headers: {
          "Content-Type": "application/json"
        },
        credentials: "same-origin"
    })
    .then(response => {
        if (response.ok) {
          return response;
        } else {
          var error = new Error('Error ' + response.status + ': ' + response.statusText);
          error.response = response;
          throw error;
        }
      },
      error => {
            throw error;
      })
    .then(response => response.json())
    .then(response => dispatch(addComment(response)))
    .catch(error =>  { console.log('post comments', error.message); alert('Your comment could not be posted\nError: '+error.message); });
};

export const displaydishes= () => dispatch =>{
    dispatch(loaddishes(true));    
   
    return fetch(Actiontypes.BASE_URL+'dishes')
    .then(response=>{
        if(response.ok){
            return response
        }else{           
            var err = new Error('Error : '+response.status+ ' : '+response.statusText);
            err.response=response
            return err
        }
    },error=>{
        var err = new Error(error.message);
        return err
    })
        .then(response=>response.json())
        .then(dishes=>{dispatch(adddishes(dishes)); console.log(dishes)})
        .catch(error => dispatch(errMsg(error)))
}

export const loaddishes = () => ({
    type:Actiontypes.DISHES_LOADING
})

export const adddishes = (dishesd) => ({
    type:Actiontypes.ADD_DISHES,
    payload:dishesd
})

export const errMsg = (errmsg) =>({
    type:Actiontypes,
    payload:errmsg
})

export const displaypromos=()=>dispatch=>{
    dispatch(loadpromos())

    return fetch(Actiontypes.BASE_URL+'promotions')
    .then(response=>{
        if(response.ok){
            return response
        }else{
            var err = new Error('Error : '+response.status+ ' : '+response.statusText);
            err.response=response
            return err
        }
    },error=>{
        var err = new Error(error.message);
        return err
    })
    .then(resolve=>resolve.json())
    .then(promotions=>dispatch(addpromos(promotions)))
    .catch(error => dispatch(errMsg(error)))
}

export const loadpromos=()=>({
    type:Actiontypes.LOAD_PROMOS
})

export const addpromos=(promotions)=>({
    type:Actiontypes.ADD_PROMOS,
    payload:promotions
})

export const failedpromos=()=>({
    type:Actiontypes.PROMOS_FAILED
})

export const displayleaders=()=>dispatch=>{
    dispatch(loadleaders())

    return fetch(Actiontypes.BASE_URL+'leaders')
    .then(response=>{
        if(response.ok){
            return response
        }else{
            var err = new Error('Error : '+response.status+ ' : '+response.statusText);
            err.response=response
            return err;
        }
    },error=>{
        var err = new Error(error.message);
        return err
    })
    .then(resolve=>resolve.json())
    .then(leaders=>dispatch(addleaders(leaders)))
    .catch(error => dispatch(errMsg(error)))
}

export const loadleaders=()=>({
    type:Actiontypes.LOAD_LEADERS
})

export const addleaders=(leaders)=>({
    type:Actiontypes.ADD_LEADERS,
    payload:leaders
})

export const failedleaders=()=>({
    type:Actiontypes.LEADERS_FAILED
})


export const displaycomments=()=>dispatch=>{
    
    return fetch(Actiontypes.BASE_URL+'comments')
    .then(response=>{
        if(response.ok){
            return response
        }else{
            var err = new Error('Error : '+response.status+ ' : '+response.statusText);
            err.response=response
            return err;
        }
    },error=>{
        var err = new Error(error.message);
        return err
    })
    .then(resolve=>resolve.json())
    .then(comments=>{dispatch(addcomments(comments))})
    .catch(error => dispatch(errMsg(error)))
}

export const addcomments=(comments)=>({
    type:Actiontypes.ADD_COMMENTS,
    payload:comments
})

export const failedcomments=()=>({
    type:Actiontypes.COMMENT_FAILED
})