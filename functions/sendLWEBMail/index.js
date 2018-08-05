/**
 * Responds to any HTTP request that can provide a "message" field in the body.
 *
 * @param {!Object} req Cloud Function request context.
 * @param {!Object} res Cloud Function response context.
 */
const nodemailer = require('nodemailer');
exports.sendMail = function helloWorld(req, res) {
  res.header('Content-Type','application/json');
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Content-Type');

  //respond to CORS preflight requests
  if (req.method == 'OPTIONS') {
    res.status(204).send('');
  }
  if (req.body['Contact Details'] === undefined) {
    // This is an error case, as "message" is required.
    res.status(400).send('Contact Details are compulsory!');
  } else {
    // Everything is okay.
    const smtpConfig = {
      host: 'smtp.mailgun.org',
      port: 465,
      secure: true, // use SSL
      auth: {
         user: 'postmaster@mg.leotide.com',
         pass: 'insert_pass',
      },
    };
    const transporter = nodemailer.createTransport(smtpConfig);
    var emailbody = 'First Name:' + req.body.Firstname + '\n' +
        'Last Name:' + req.body.Lastname + '\n' +
        'Contact Details:' + req.body['Contact Details'] + '\n' +
        'Message:' + req.body.Message + '\n' +
        'Extras' + JSON.stringify(req.body.items) + '\n' + 
    	'Shipping:' + JSON.stringify(req.body.shipping) + '\n';
	var mailOptions = {
		from: '"Leo H Website" <leotide@mg.leotide.com>', // sender address
		to: 'goldenoblivion@gmail.com, leo.herson@gmail.com', // list of receivers
		subject: 'Website Contact', // Subject line
		text: emailbody, // plaintext body
		html: '', // html body
	};
    res.send(transporter.sendMail(mailOptions, (error, info) => {
		if (error) {
			return error;
		}
		return info.response;
	}));
  }
};
