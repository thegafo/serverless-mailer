
var request = require('request');


// Configure the request
var options = {
    url: 'https://7ttzkegsn9.execute-api.us-east-1.amazonaws.com/dev/email',
    method: 'POST',
    json: {
      email: "info@aquassurance.com",
      password: "27c74cb90f1858975863bb65629ad63f",
      from: '"Gabe" <info@aquassurance.com>', // sender address
      to: 'gafo4900@gmail.com', // list of receivers
      subject: 'Hello - Serverless Test✔', // Subject line
      text: 'Hello world 🐴', // plaintext body
      html: '<h1>Hello world 🐴</h1>' // html body
    }
}

// Start the request
request(options, function (error, response, body) {
  console.log(error,response.statusCode, body);
})
