const path = require('path');
// Setup express and ejs
var express = require ('express')
var ejs = require('ejs')

// Create the express application object
const app = express()
const port = 8000

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

// Set up the body parser 
app.use(express.urlencoded({ extended: true })); 

// Load the route handlers
const mainRoutes = require("./routes/main");  
app.use('/', mainRoutes);

// Start the web app listening
app.listen(port, () => console.log(`Example app listening on port ${port}!`))
