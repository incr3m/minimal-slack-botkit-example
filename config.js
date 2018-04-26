require('dotenv').config({ silent: true });

module.exports = {
  ALLOW_DEPLOY_FROM_EVERYWHERE:
    process.env.ALLOW_DEPLOY_FROM_EVERYWHERE === 'true' || false,
  SLACK_BOT_TOKEN: process.env.SLACK_BOT_TOKEN || '',//Bot User OAuth Access Token
  SLACK_OAUTH_ACCESS_TOKEN: process.env.SLACK_OAUTH_ACCESS_TOKEN || '',
  SLACK_CLIENT_ID: process.env.SLACK_CLIENT_ID || '',
  SLACK_CLIENT_SECRET: process.env.SLACK_CLIENT_SECRET || '',
};
