
# Serverless Email Sender - AWS Lambda

Send emails programmatically from your gmail account with a simple POST request.

## Usage Example

```javascript
var request = require('request');

// Configure the request
var options = {
    url: 'https://7ttzkegsn9.execute-api.us-east-1.amazonaws.com/dev/email',
    method: 'POST',
    json: {
      email: "...@gmail.com",
      password: "...",
      from: '"Name" <...@gmail.com>',
      to: '...',
      subject: '...',
      text: '...',
      html: '<h1>...</h1>'
    }
}

// Start the request
request(options, function (error, response, body) {
  console.log(error,response.statusCode, body);
})

```
