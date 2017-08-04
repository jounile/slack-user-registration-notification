var https = require('https');
var url = require('url');
var slack_url = 'https://hooks.slack.com/services/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';
var slack_opts = url.parse(slack_url);
slack_opts.method = 'POST';
slack_opts.headers = {'Content-Type': 'application/json'};

exports.handler = function(event, context) {
	console.log(JSON.stringify(event));
	var user = event.Records.Email;
	var newsletter = event.Records.Newsletter;
	var payload = user + " just signed up to your newsletter:\n" + newsletter;

	var req = https.request(slack_opts, function(res) {
		if (res.statusCode === 200) {
			context.succeed("OK");
		} else {
			context.fail('Failed: ' + res.statusCode);
		}
	});
	
	req.on('error', function(e) {
         console.log('Error with request: ' + e.message);
         context.fail(e.message);
     });
      
    req.write(JSON.stringify({username: 'registration-bot', icon_emoji: ':thumbsup:', text: payload}));
    req.end();
}