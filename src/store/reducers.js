import { combineReducers } from 'redux';

import Register from './auth/register/reducer';
// import Login from './auth/login/reducer';


const rootReducer = combineReducers({
    
    Register,
    // Login,
    
});

export default rootReducer;