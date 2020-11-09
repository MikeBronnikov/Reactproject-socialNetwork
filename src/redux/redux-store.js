import {combineReducers, createStore} from 'redux';
import dialogsReducer from './dialogsReducer';
import profileReducer from './ProfileReducer';
import sidebarReducer from './sideBarReducer';
let reducers = combineReducers({
    profilePage: profileReducer,
    dialogsPage: dialogsReducer,
    friends: sidebarReducer,
})
let store = createStore(reducers);

export default store;