import { all } from 'redux-saga/effects';



import RegisterSaga from './auth/register/saga';




export default function* rootSaga() {
    yield all([
      
      RegisterSaga(),
      
    ])
}