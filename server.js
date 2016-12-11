var connect = require('connect');
var serveStatic = require('serve-static');



var task = function() {
connect().use(serveStatic(__dirname)).listen(8081, function(err){
	if(err)task();
    console.log('Server running on 8081...');
});
}
task();
