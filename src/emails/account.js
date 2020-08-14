const sgMail = require('@sendgrid/mail');

//const sendgridAPIKey = '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';

sgMail.setApiKey(process.env.SENDGRID_API_KEY);

const sendWelcomeEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'szymon.wysoka206@gmail.com',
        subject: 'Thanks for joining in!',
        text: `Welcome to the app, ${name}. Let me know how get along with the app`
    }).then(() => {
        console.log('Email sent');
    }).catch((e) => {
        console.log(e.response.body);
    })
}

const sendCancelationEmail = (email, name) => {
    sgMail.send({
        to: email,
        from: 'szymon.wysoka206@gmail.com',
        subject: 'Sorry to see you go',
        text: `Goodbye, ${name}. I hope to see you back sometime soon`
    }).then(() => {

    }).catch((e) => {
        console.log(e.response.body);
    })
}

module.exports = {
    sendWelcomeEmail,
    sendCancelationEmail
}