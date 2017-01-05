'use strict';

var nodemailer = require('nodemailer');

module.exports.mailer = (event, context, callback) => {

  var body, email, password, from, to, subject, text, html;

  try {
    body = JSON.parse(event.body);
    email = body.email;
    password = body.password;
    from = body.from;
    to = body.to;
    subject = body.subject;
    text = body.text;
    html = body.html;

  } catch (err) {
    return callback(null, {
      statusCode: 400,
      headers: {
        "Access-Control-Allow-Origin" : "*" // Required for CORS support to work
      },
      body: "Invalid request"
    });
  }

  if (!(email && password && from && to && subject && text && html)) {
    return callback(null, {
      statusCode: 400,
      headers: {
        "Access-Control-Allow-Origin" : "*" // Required for CORS support to work
      },
      body: "Invalid request"
    });
  }

  console.log("attempting to send email");

  var transporter = nodemailer.createTransport('smtps://' + email.replace('@', '%40') + ':' + password + '@smtp.gmail.com');

  var mailOptions = {
      from: from,
      to: to,
      subject: subject,
      text: text,
      html: html
  };

  // send mail with defined transport object
  transporter.sendMail(mailOptions, function(error, info){
      if (error){
        return callback(null, {
          statusCode: 400,
          headers: {
            "Access-Control-Allow-Origin" : "*" // Required for CORS support to work
          },
          body: "could not send email"
        });
      }

      return callback(null, {
        statusCode: 200,
        headers: {
          "Access-Control-Allow-Origin" : "*" // Required for CORS support to work
        },
        body: "email sent"
      });
  });


};
