const help = {
  name: 'help',
  description: 'Show command list',
  execute(msg, args) {
    let result = '';
    Object.keys(commands).map((key) => {
      result = `${result}**${commands[key].name}** - ${commands[key].description}\n`;
    });
    msg.channel.send(result);
  },
};

const commands = {
  help,
  animequote: require('./animequote'),
  ping: require('./ping'),
};

module.exports = commands;
