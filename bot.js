const config = require('./config')
const Botkit = require('botkit')
// import { isMaster } from './helpers';

const controller = Botkit.slackbot({
  stats_optout: true,
  retry: Infinity
});

controller
  .spawn({
    token: config.SLACK_BOT_TOKEN,
  })
  .startRTM((err, bot, payload) => {
    if (err) {
      throw new Error('Could not connect to Slack');
    }
  });

controller.hears(
  ['hello', 'help'],
  'direct_message,direct_mention,mention',
  async function(bot, message) {
    bot.startConversationInThread(message, (err, convo) => {
      convo.say(`
      hahahaha
`);
    });
  }
);
