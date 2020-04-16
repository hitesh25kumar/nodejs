import Comment from '../models/Comment';

export class AppController {

    static async addComment(req,res,next){
     const post = req.post;
     console.log('post: ', post);
     const content = req.body.content;

     var registrationToken = 'YOUR_REGISTRATION_TOKEN';

     var message = {
       data: {
         score: '850',
         time: '2:45'
       },
       token: registrationToken
     };
     
try{
    
    // Send a message to the device corresponding to the provided
    // registration token.
    admin.messaging().send(message)
      .then((response) => {
        // Response is a message ID string.
        console.log('Successfully sent message:', response);
      })
      .catch((error) => {
        console.log('Error sending message:', error);
      });
}
catch(e){
    next(e);
}

    }
}