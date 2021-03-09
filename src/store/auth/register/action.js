import { MERCHANT_SIGN_UP } from "./actionType";

export const merchantSignUp = data =>{
    return {
        type: MERCHANT_SIGN_UP,
        payload: data
    }
}