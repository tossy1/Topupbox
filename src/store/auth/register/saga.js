import {
    takeEvery,
    fork,
    put,
    all,
    call
} from 'redux-saga/effects';

import qs from 'qs';
import fetchJSON from '../../../helpers/fetchJson';
import {MERCHANT_SIGN_UP} from './actionType';

import {merchantSignUpUrl} from '../../../helpers/endpoints';

import {} from '../register/action';


// Set authentication for user and remove it once user logs out


function* callMerchantSignUp ({payload: value}) {
    try {

        const options = {
            method: 'POST',
            data: JSON.stringify(value),
            header: {
                'Content-Type': 'application/json'
            },

            url: merchantSignUpUrl()
        };

        const response = yield call(fetchJSON, options);


    } catch (error) { // let message = error === undefined ? 'Something went wrong please try again later' : error.data.error.message;
        console.log(error, 'error here');
    }
}

function* callLogout ({payload: history}) {
    try { // setSession(null);
        yield call(() => {
            history.replace('/');
        });
    } catch (error) {}
}

function* callLoginUser ({
    payload: {
        value,
        history
    }
}) {
    try {
        const options = {
            method: 'POST',
            data: qs.stringify({}),

            // url: loginUserUrl(),
        };

        const response = yield call(fetchJSON, options);


    } catch (error) {
        let message = error === undefined ? 'Something went wrong, Kindly check your network and try again later' : error.data.error_description;


    }
}

export function* watchMerchantSignUp () {
    yield takeEvery(MERCHANT_SIGN_UP, callMerchantSignUp);
}


function* LoginSaga () {
    yield all([fork(watchMerchantSignUp)]);
}

export default LoginSaga;
