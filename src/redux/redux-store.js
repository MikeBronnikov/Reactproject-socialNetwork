import {applyMiddleware, combineReducers, createStore} from 'redux';
import dialogsReducer from './dialogsReducer';
import profileReducer from './ProfileReducer';
import friendsReducer from './friendsReducer';
import usersReducer from './UsersReducer';
import thunkMiddleware from 'redux-thunk'

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    friendsPage: friendsReducer,
    usersPage: usersReducer
})
let store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;