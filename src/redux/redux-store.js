import {applyMiddleware, combineReducers, createStore} from 'redux';
import dialogsReducer from './dialogsReducer';
import profileReducer from './ProfileReducer';
import friendsReducer from './friendsReducer';
import usersReducer from './UsersReducer';
import authReducer from './authReducer';
import thunkMiddleware from 'redux-thunk'
import appReducer from './appReducer';

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    friendsPage: friendsReducer,
    usersPage: usersReducer,
    auth: authReducer, 
    app: appReducer
})
let store = createStore(reducers, applyMiddleware(thunkMiddleware));

export default store;