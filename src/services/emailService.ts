import { SESClient, SendEmailCommand } from '@aws-sdk/client-ses';
import { error } from 'console';
require('dotenv').config()

const ses = new SESClient({});

export async function sendEmailToken(email: string, token: string) {
  console.log('email: ', email, token);

  const message = `Your one time password is ${token}`;
  const command = createEmailCommand(email, 'hello.rokastech@gmail.com', message);

  try {
    return await ses.send(command);
  } catch (e) {
    console.log(`Error sending email: ${e}`);
    return e;
  }
};

sendEmailToken('hello.rokastech@gmail.com', 'test');
