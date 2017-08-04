Slack User Registration Notification
===================

This directory contains the Lambda function, Lambda role policy, test event data, and the package.json file which makes it easy to install dependencies. The only dependencies needed with this function is to test locally using grunt and grunt-aws-lambda.

## Dependencies and Installation

Ensure Node is installed. This can be done through your package manager or from their [website](http://nodejs.org/).

Use `npm` to install the application's dependencies (in the directory where this README and package.json are):

$ npm install

This will install dependencies defined in package.json. These dependencies are only necessary if you want to test locally and use the grunt deploy command.

(Make sure you change the function arn under 'lambda_deploy' in the Gruntfile.js to your function's ARN if you want to use `grunt deploy`)

* The only thing you need to change in the function before uploading it is the slack_url. Use your own URL here. You got this URL when you created the Incoming Webhook for your channel.

* Zip up the index.js file and create your function.

(If you don't already have a role set up for Lambda to use, you can use the policy in lambda_basic_execution_policy.json. Create a new Role and attach that policy to it.)

## Next Step
By now, you should have your Slack channel, Incoming Webhook, and this Lambda function all set up and ready to go. The next step is to create the API in Amazon API Gateway. Follow the steps in the video lessons for this part.

After you set up the API, it's time to create your application. Refer to the README.md in the main directory (where index.html is).