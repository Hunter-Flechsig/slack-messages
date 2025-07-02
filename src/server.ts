import app from './app';
import config from './config/config';

import cron from 'node-cron';
import { WebClient } from '@slack/web-api';

cron.schedule('* * * * *', async () => {
  const web = new WebClient(config.slackToken);
  const currentTime = new Date().toTimeString();
  try {
    await web.chat.postMessage({
      channel: 'mobile-app',
      text: `Test Sending a Message every minute: The current time is ${currentTime}`,
    });
    console.log('Message posted!');
  } catch (error) {
    console.log(error);
  }
});

app.listen(config.port, () => {
  console.log(`Server running on port ${config.port}`);
});
