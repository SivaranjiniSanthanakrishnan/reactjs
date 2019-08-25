import {createStore, combineReducers, applyMiddleware} from 'redux'
import {dishes_reducer} from './dishes_reducer'
import {leaders_reducer} from './leaders_reducer'
import {promotions_reducer} from './promotions_reducer'
import {comments_reducer} from './comments_reducer'
import thunk from 'redux-thunk'
import logger from 'redux-logger'
import {InitialFeedback} from './ContactForm'
import {createForms} from 'react-redux-form'

// export const configureStore=()=>{
//     const store =
//         createStore(
//             reducer, initialState
//         )
//     return store;
// }

export const configureStore=()=>{
    const store =createStore(
        combineReducers({
            dishes:dishes_reducer,
            leaders: leaders_reducer,
            promotions:promotions_reducer,
            comments:comments_reducer,
            ...createForms({
                feedback: InitialFeedback
            })
        }),
        applyMiddleware(thunk, logger)
    );
    return store;
}
