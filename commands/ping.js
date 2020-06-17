module.exports = {
  name: 'ping',
  description: 'Return pong when receive ping',
  execute(msg, args) {
    // msg.reply('pong');
    msg.channel.send('pong');
  },
};
