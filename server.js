const express = require('express');
const compression = require('compression');
const path = require('path');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');

const cacheTime = 86400000 * 7;     // 7 days
const app = express();

const smtpConfig = {
	host: 'smtp.mailgun.org',
	port: 465,
	secure: true, // use SSL
	auth: {
		user: 'postmaster@mg.leotide.com',
		pass: '210be66e6ee5b647489d0f95972a695d',
	},
};

const transporter = nodemailer.createTransport(smtpConfig);
app.use(bodyParser.urlencoded({
	extended: true,
}));

app.use(compression());

app.use(bodyParser.json());

app.post('/postform', (req, res) => {
	var emailbody = 'First Name:' + req.body.Firstname + '\n' +
		'Last Name:' + req.body.Lastname + '\n' +
		'Contact Details:' + req.body['Contact Details'] + '\n' +
		'Message:' + req.body.Message + '\n';
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
});

app.get('/', (req, res) => {
	res.sendFile(path.join(__dirname, '/index.html'));
});

app.use('/assets', express.static(path.join(__dirname, '/assets'), { maxAge: cacheTime }));

app.listen(process.env.PORT || 8001);
