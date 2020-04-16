"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
class AppController {
    static addComment(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
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
            try {
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
            catch (e) {
                next(e);
            }
        });
    }
}
exports.AppController = AppController;
