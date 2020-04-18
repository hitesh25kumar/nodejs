import * as express from 'express';
import * as mongoose from 'mongoose';
import  * as bodyParser from 'body-parser';
import { getEnvironmentVariables } from './environments/env';
import UserRouter from './routers/UserRouter';
import PostRouter from './routers/PostRouter';
import CommentRouter from './routers/CommentRouter';
import GroceryRouter from './routers/GrocceryRouter';
import { Jobs } from './jobs/Jobs';
import {Auth} from './controllers/sendWhatsapp';

export class Server {
public app: express.Application = express();

constructor(){
    this.setConfiguration();
    this.setRoutes();
    this.error404Handler();
    this.handleErrors();
}

setConfiguration(){
    this.connectMongodb();
    this.configureBodyParser();
    this.app.use(function(req, res, next) {
        res.header("Access-Control-Allow-Origin", '*');
        res.header("Access-Control-Allow-Credentials");
        res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
        res.header("Access-Control-Allow-Headers", 'Origin,X-Requested-With,Content-Type,Accept,content-type,application/json');
        next();
    });

this.app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });
    // Jobs.runRequiredJobs();
}

configureBodyParser(){
    this.app.use(bodyParser.urlencoded({extended: true}))
}

setRoutes(){
    this.app.use('/src/uploads', express.static('src/uploads'));
   this.app.use('/api/user/', UserRouter);
   this.app.use('/api/post/', PostRouter);
   this.app.use('/api/comment/', CommentRouter);
   //Test api
   this.app.use('/api/groccery/', GroceryRouter);
}

error404Handler(){
    this.app.use((req,res) => {
        res.status(404).json({
            message:"Not Found",
            status_code: 404
        })
    })
}

handleErrors(){
    this.app.use((error, req, res, next) => {
        const errorStatus = req.errorStatus || 500;
        res.status(errorStatus).json({
            message:error.message || 'Something went wrong please try again',
            status_code: errorStatus
        })
    })
}

connectMongodb(){
    const databaseUrl = getEnvironmentVariables().db_url;
    mongoose.connect( databaseUrl, { useNewUrlParser: true,useUnifiedTopology: true,useFindAndModify: false }).then(
        () => console.log('connected to db'))
}

}