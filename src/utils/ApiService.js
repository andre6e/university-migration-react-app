import axios from 'axios';

import {API_URL, REQUEST_ENDPOINT} from '../constants/constants';

export const postRequest = function (body) {
    return axios.post(API_URL + REQUEST_ENDPOINT, body)
      .then(function (response) {
        return response;
      })
      .catch(function (error) {
        return error;
      });
};