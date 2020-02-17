"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const JobScheduler = require("node-schedule");
class Email {
    static runEmailJobs() {
        this.sendEmailJobs();
    }
    static sendEmailJobs() {
        JobScheduler.scheduleJob('send email job', '* * * * * *', () => {
            console.log('email job scheduled');
        });
    }
}
exports.Email = Email;
