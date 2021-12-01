import httpService from "../../services/httpService";
import config from "../../config";
const axios = require('axios');

const {
    server: { IPADDRESS },
} = config;

export const getCountryName = (ipAddress) => async dispatch => {
    let config = {}
    try {
          httpService.post(IPADDRESS.FindCountry ,{ip:ipAddress}, config ).then(response => {
              if (response.status === 200) {
              }
              }).catch(error => {
              })
    } catch (e) {
     
    }
  };