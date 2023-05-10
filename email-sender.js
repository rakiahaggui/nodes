const nodemailer = require('nodemailer');

// create reusable transporter object using SMTP transport
let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'rakiahaggui592@gmail.com',
        pass: 'ccccxxxxx'
    }
});

// setup email data
let mailOptions = {
    from: '"haggui rakia" <rakiahaggui592@gmail.com>',
    to: 'bkhdhoha@gmail.com',
    subject: 'Hello from Node.js',
    text: 'Hello, this is a test email from Node.js!'
};

// send email with defined transport object
transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
        console.log(error);
    } else {
        console.log('Email sent: ' + info.response);
    }
});
