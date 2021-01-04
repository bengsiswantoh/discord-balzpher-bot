const axios = require('axios');

const baseURL = 'https://animechanapi.xyz/api/';
const url = '/quotes/random';

module.exports = {
  name: 'animequote',
  description: 'Show random anime quote',
  async execute(msg, args) {
    try {
      const response = await axios({ method: 'get', url, baseURL });
      const quote = response.data.data[0];
      let result = `__**${quote.anime}**__\n`;
      result = `${result}**${quote.character}**\n`;
      result = `${result}${quote.quote}`;
      msg.channel.send(result);
    } catch (err) {
      msg.channel.send(err);
    }
  },
};
