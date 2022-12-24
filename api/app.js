const express = require('express');

// Middlewares
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const cors = require('cors');
const helmet = require('helmet');
const rateLimiter = require('./middleware').rateLimiter;
const endpointRouter = require('./routes/endpoints');
const pageRouter = require('./routes/pages');

const port = 3001;
const path = require('path');



const app = express();
app.listen(port, 300);

// Use Helmet to define headers for sec
app.use(helmet());

// Enable CORS for all routes
app.use(cors());

// Use body-parser as middleware to decode POST content
app.use(bodyParser.json()); 
app.use(bodyParser.urlencoded({extended: false}));

// Parse cookies
app.use(cookieParser());

// Use rate limiter
app.use(rateLimiter);

// Serve static files
app.use('/static', express.static(path.join(__dirname, 'static')));


// Set templating engine for page views
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'twig');
// This section is optional and used to configure twig.
app.set("twig options", {
    allow_async: true, // Allow asynchronous compiling
    strict_variables: false
});




app.use('/', pageRouter);
app.use('/api', endpointRouter);




module.exports = app;
