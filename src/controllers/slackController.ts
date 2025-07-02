import { Request, Response, NextFunction } from 'express';
import { WebClient } from '@slack/web-api';
import config from '../config/config';

export const sendMessage = async (
  req: Request,
  res: Response,
  next: NextFunction,
) => {
  const web = new WebClient(config.slackToken);
  const currentTime = new Date().toTimeString();

  try {
    // Use the `chat.postMessage` method to send a message from this app
    await web.chat.postMessage({
      channel: 'mobile-app',
      text: `Test-Message: The current time is ${currentTime}`,
    });
    console.log('Message posted!');
    res.status(200).json({ message: 'Message posted Successfully' });
  } catch (error) {
    next(error);
  }
};
