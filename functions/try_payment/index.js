/**
 * Responds to any HTTP request that can provide a "message" field in the body.
 *
 * @param {!Object} req Cloud Function request context.
 * @param {!Object} res Cloud Function response context.
 */
var stripe = require('stripe')(
    "insert key"
);

var cors = require('cors');

var request = require('request');

// my function
var chargeFn = function chargeFn(req, res) {
if (req.method === 'OPTIONS') {
    res.set('Access-Control-Allow-Origin', "*");
    res.set('Access-Control-Allow-Headers', "content-type");
    res.set('Access-Control-Allow-Methods', 'GET, POST');
    return res.status(200);
}
if (req.body.card === undefined || req.body.id === undefined || req.body.shoppingCart === undefined) {
    // This is an error case, as the parameters are required.
    return res.status(400).send('Not all params defined!');
} else {
    // Everything is okay.
    var charge = stripe.charges.create({ // Create Stripe charge with token
    amount: req.body.amount,
    currency: req.body.currency,
    description: 'LeoTide Art',
    source: req.body.id, // obtained with Stripe.js
    })
    .then((charge) => { // Success response
    request.post({
        headers: {'content-type' : 'application/json'},
        url: 'https://us-central1-lweb-176107.cloudfunctions.net/sendLWEBMail',
        body: JSON.stringify({
            'Contact Details': req.body.email,
            Message: `Amount ${req.body.amount}`,
            items: req.body.shoppingCart,
            shipping: charge.source,
        }),
        }, function(error, response, body){
        return res.status(200).send({message: `Payment success!`, charge: charge});
    });
    })
    .catch((err) => { // Error response
    return res.status(400).send({message: `Payment failed!`, err: err});
    });
}
};

// CORS and Cloud Functions export logic
exports.charge = function charge(req, res) {
    var corsFn = cors();
    corsFn(req, res, function() {
        chargeFn(req, res);
    });
}

