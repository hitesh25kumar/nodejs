import * as nodeMailer from 'nodemailer';
import * as SendGrid from 'nodemailer-sendgrid-transport';


export class NodeMailer {
    private static initializeTransport() {
        return nodeMailer.createTransport(SendGrid({
            auth: {
                api_key: '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'
            }
        }))
    }

    static sendEmail(data: {
        to: [string],
        subject: string,
        html: string
    }): Promise<any>
     {
     return  NodeMailer.initializeTransport().sendMail({
            from: 'hitesh25kumar@gmail.com',
            to: data.to,
            subject: data.subject,
            html: data.html
        })
    }
}