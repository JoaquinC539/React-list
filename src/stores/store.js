import { combineReducers} from 'redux';
import {configureStore} from '@reduxjs/toolkit';
import userReducer from './reducers/userReducer';


const rootReducer=combineReducers({
    user:userReducer,
    
});


const store=configureStore({
    reducer:rootReducer
});

export default store;