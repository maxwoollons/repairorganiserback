// const allowedOrigins = ['http://localhost:3000'];
const allowedOrigins = ['https://jbrepair.xyz',"https://api.jbrepair.xyz",'http://localhost:3000'];


const corsOptions = {


credentials: true,
methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',

    origin: (origin, callback) => {

        if (allowedOrigins.indexOf(origin) !== -1) {
            callback(null, true);

        } else {
            callback(new Error('Not allowed by CORS'));
        }
    },
    optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
};

export default corsOptions;