const axios = require('axios');

const baseURL = 'https://finance.yahoo.com/quote/';
const url = '/BBCA.JK';

const getPrice = async () => {
  // const response = await axios({ method: 'get', url, baseURL });
  // console.log(response.data);
  // return response.data;
  return 'OK';
};

module.exports = {
  getPrice,
};
