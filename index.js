const express = require('express'); //Import the express dependency
const app = express();              //Instantiate an express app, the main work horse of this server
const port = 5000;                  //Save the port number where your server will be listening
let itr = 0;
let value = "0"
let seq = "11100011100011100010101000";
let len = seq.length;

//Idiomatic expression in express to route and respond to a client request
app.get('/val', (req, res) => {        //get requests to the root ("/") will route here
    res.send(value);       //send the string "Hello World!" back to the client
});


setInterval(() => {
    value = seq[itr];
    itr = (itr + 1) % len;
}, 300);

app.listen(port, () => {            //server starts listening for any attempts from a client to connect at port: {port}
    console.log(`Now listening on port ${port}`); 
});