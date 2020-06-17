const axios = require('axios');

const baseURL = 'https://anime-chan.herokuapp.com/api/';
const url = '/quotes/random';

module.exports = {
  name: 'animequote',
  description: 'Anime Quote',
  async execute(msg, args) {
    const response = await axios({ method: 'get', url, baseURL });
    const quote = response.data[0];
    let result = `__**${quote.anime}**__\n`;
    result = `${result}**${quote.character}**\n`;
    result = `${result}${quote.quote}`;
    msg.reply(result);
  },
};
