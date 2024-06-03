var http = require('http');


// this callback function is executed whenever there is an incoming request.
const myserver = http.createServer((req, res) => {
    console.log('new request received')
    console.log(req.url)
    switch(req.url) {
        case '/': res.end('hello');
        break;
        case '/home': res.end('home')
    }
    // res.end("hey!")
}); 

myserver.listen(8000, () => {
    console.log("server started.")
});


/**
 * 
 * 200 - success/OK
201 - CREATED - used in POST or PUT methods.
304 - NOT MODIFIED - used in conditional GET requests to reduce the bandwidth use of the network. 
Here, the body of the response sent should be empty.
400 - BAD REQUEST - This can be due to validation errors 
or missing input data.
401- UNAUTHORIZED - This is returned when 
there is no valid authentication credentials sent along with the request.
403 - FORBIDDEN - sent when the user
 does not have access (or is forbidden) to the resource.
404 - NOT FOUND - Resource method is not available.
500 - INTERNAL SERVER ERROR - server threw some exceptions
 while running the method.
502 - BAD GATEWAY - Server was not able 
to get the response from another upstream server
 */