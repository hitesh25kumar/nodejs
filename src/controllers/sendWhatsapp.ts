import client = require('twilio');

export class Auth {
static async sendWhatapp(req, res, next) {
client.messages.create({
    from: 'whatsapp:+14155238886',
    to:'whatsapp:+919756740984',
    body:'Hello'
}).then(message => res.send(message.sid));

}
}