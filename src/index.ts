import express from 'express';
import http from 'http';
import dotenv from 'dotenv';
import cors from 'cors';
import {swaggerSpec, swaggerUi} from './swagger';

// files imports
import connectToMongoDB from './config/mongodb/md_connect';
import defaultRoute from './route/default.route';
import contactUsRoute from './route/contactUs.route';

dotenv.config();
const app = express();
const server = http.createServer(app);

// -------------------------------------------------------------------------------------MONGODB CONNECTION
connectToMongoDB();

// -------------------------------------------------------------------------------------CORS
app.use(cors());

// -------------------------------------------------------------------------------------MIDDLEWARE BODYPARSER
app.use(express.json());
app.use(express.urlencoded({extended: true}));

const PORT = process.env.PORT;
const BASE_SERVER_URL = process.env.BASE_SERVER_URL;

// -------------------------------------------------------------------------------------SWAGGER DOCUMENTATION
app.use('/api/v1/sc/docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// -------------------------------------------------------------------------------------DEFAULT ROUTES
app.use('/',defaultRoute);

// -------------------------------------------------------------------------------------CONTACTUS ROUTE
app.use('/api/v1/sc',contactUsRoute)



// --------------------------------------------------------------------------------------SERVER LISTNING
server.listen(PORT,()=>{
    console.log(`Server is running on URL => ${BASE_SERVER_URL}`);
})