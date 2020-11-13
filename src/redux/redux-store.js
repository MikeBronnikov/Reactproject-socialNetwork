import {combineReducers, createStore} from 'redux';
import dialogsReducer from './dialogsReducer';
import profileReducer from './ProfileReducer';
import friendsReducer from './friendsReducer';
import usersReducer from './UsersReducer';

let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    friendsPage: friendsReducer,
    usersPage: usersReducer
})
let store = createStore(reducers);

export default store;