import sgMail from '@sendgrid/mail'
require('dotenv').config();

sgMail.setApiKey(process.env.SENDGRID_KEY as string)


interface Message {
    to: string, // Change to your recipient
    from: string, // Change to your verified sender
    subject: string,
    text: string,
    html: string,
}

class SendGridMail {
    private readonly _message: Message

    constructor() {
        this._message = {} as Message
        this._message.from = process.env.SENDGRID_FROM_MAIL as string
    }

    to(email: string) {
        this._message.to = email
        return this
    }

    subject(subject: string) {
        this._message.subject = subject
        return this
    }

    content(content: string) {
        this._message.html = content
        return this
    }

    async send(): Promise<boolean> {
        try {
            await sgMail.send(this._message)
            return true
        } catch (e) {
            console.log(e)
            return false
        }
    }

}

const sendGridMail = () => new SendGridMail()
export {sendGridMail}