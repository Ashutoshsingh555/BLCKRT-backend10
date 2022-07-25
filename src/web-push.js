
import webpush from'web-push';

webpush.setVapidDetails(
  'mailto:http://localhost:3000',
  vapidKeys.process.env.Public_Key,
  vapidKeys.rocess.env.Private_Key
); 
