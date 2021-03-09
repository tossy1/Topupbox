import { takeEvery, fork, put, all, call } from 'redux-saga/effects';

import qs from 'qs';
import { fetchJSON } from '../../../helpers/apiCalls';
import { } from './actionType';

import {  } from '../../../helpers/endPoints';
import {  } from '../../../helpers/authUtils';
import {  } from '../register/action';


// This is for getting general token
const token = clientToken();

//Set authentication for user and remove it once user logs out


function* callRequestPasswordReset({ payload: { value} }) {
    try {
        const options = {
            method: 'POST',
            data: JSON.stringify({
              
            }),
            headers: {
               
            },
            // url: requestPasswordResetUrl(),
        };

        const response = yield call(fetchJSON, options);

       
    } catch (error) {
        let message = error === undefined ? 'Something went wrong please try again later' : error.data.error.message;
      
    }
}

function* callLogout({ payload: history }) {
    try {
        setSession(null);
        yield call(() => {
            history.replace('/');
        });
    } catch (error) {}
}

function* callLoginUser({ payload: { value, history } }) {
    try {
        const options = {
            method: 'POST',
            data: qs.stringify({
                username: value.email,
                password: value.password,
                grant_type: 'password',
                scope: 'profile',
            }),
            auth: basicToken(),
            url: loginUserUrl(),
        };

        const response = yield call(fetchJSON, options);

        
        

      
    } catch (error) {
        let message =
            error === undefined
                ? 'Something went wrong, Kindly check your network and try again later'
                : error.data.error_description;

      
    }
}

// export function* watchCreateNewPassword() {
//     yield takeEvery(CREATE_NEW_PASSWORD, callCreateNewPassword);
// }


function* LoginSaga() {
    yield all([
       
    ]);
}

export default LoginSaga;