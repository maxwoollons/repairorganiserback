import express from 'express';
import repairController from './controllers/repair.js';
import session from 'express-session';
import cors from "cors";
import corsOptions from './corsOptions.js';
// import proxy from 'express-http-proxy';
import loginController from './controllers/login.js';
import https from 'http';
import fs from 'fs';



const app = express();


app.use(cors(corsOptions));


app.use(function (req, res, next) {	
    res.setHeader('Access-Control-Allow-Origin', 'http://jbrepair.xyz');   
    // res.setHeader('Access-Control-Allow-Origin', 'http://localhost:3000');    

    res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, PATCH, DELETE');    
    res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With'); 
    res.setHeader('Access-Control-Allow-Credentials', true);    
    next();
});

app.use(session({
    secret: 'keyboard cat',
    resave: false,
    saveUninitialized: true,
    cookie: {sameSite: 'none',httpOnly:true,secure:false }
    }));
app.use(express.json());


const port = 8000;

app.use('/api/repairs', repairController)
app.use('/api/login', loginController)
// app.use('/', proxy('https://maxwoollons.github.io/repairorganiser/'));
// app.use('/', proxy('http://localhost:3000/'));




https.createServer({
    key: fs.readFileSync('back/src/privkey.pem'),
    cert: fs.readFileSync('fullchain.pem')
}, app).listen(port, () => {
    console.log(`Server running on port ${port}`);
}
);
