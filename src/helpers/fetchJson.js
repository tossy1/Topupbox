/**
 * Fetch data from given url
 * @param {*} url
 * @param {*} options
 */

import axios from 'axios';

axios.interceptors.response.use(null, error => {
    const expectedErr = error.response && error.response.status >= 400 && error.response.status < 500;
    if (!expectedErr) {
        console.log('Intercepted error', error.response);
    }
    console.log(error); 

    return Promise.reject(error);   
});

const fetchJSON = (options = {}) => {
    return axios(options)
        .then(function (response) {
            return response;
        })
        .catch(function (error) {
            console.log('error from the catch block', error);

            throw error.response;
        });
};
// if you feel like using then promise but I am cool with try catch
// const fetchJSON = (url, options = {}) => {
//   return fetch(url, options)
//     .then(response => {
//       if(response.status > 205){

//         throw response;
//     }

//       return response.json();
//     })
//     .then(result => {

//       return result;
//     })
//     .catch(error => error);
// };

export default fetchJSON ;