import path from 'path';
import express from 'express';
import morgan from 'morgan';
import bodyParser from 'body-parser';
import config from './config/config.js'
import drillRouter from './routes/drillRouter.js';
import {connectToDatabase} from './connectMongodb.js';

//connect to database
const db = connectToDatabase().on(
   "error",
   console.error.bind(console, "MongoDB connection error:")
 );
 db.once("open", () => {
   console.log("Successfully connected to mongoose database!");
   
 });

//initialize app
const app = express();

//enable request logging for development debugging
app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, 'client/build')));
//body parsing middleware
app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(bodyParser.json());

/* serve static files - see http://expressjs.com/en/starter/static-files.html */
// app.use('/', express.static('./../../client'));

/* Request Handler for route /api/drills
*/
app.use('/api/drills/', drillRouter);

/* Request handler for all other routes
   Sends a response (res) to go to the homepage for all routes not specified */
app.all('/*', (req, res) => {


   res.statusCode === 404 ? res.send('Sorry, information not available') : res.sendFile(path.resolve('../client/public/index.html'))
        
});

app.listen(config.port, () => console.log(`App now listening on port ${config.port}`));