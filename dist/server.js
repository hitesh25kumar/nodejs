"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const env_1 = require("./environments/env");
const UserRouter_1 = require("./routers/UserRouter");
const PostRouter_1 = require("./routers/PostRouter");
const CommentRouter_1 = require("./routers/CommentRouter");
const GrocceryRouter_1 = require("./routers/GrocceryRouter");
class Server {
    constructor() {
        this.app = express();
        this.setConfiguration();
        this.setRoutes();
        this.error404Handler();
        this.handleErrors();
    }
    setConfiguration() {
        this.connectMongodb();
        this.configureBodyParser();
        this.app.use(function (req, res, next) {
            res.header("Access-Control-Allow-Origin", '*');
            res.header("Access-Control-Allow-Credentials");
            res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE,OPTIONS');
            res.header("Access-Control-Allow-Headers", 'Origin,X-Requested-With,Content-Type,Accept,content-type,application/json');
            next();
        });
        this.app.use(function (req, res, next) {
            res.header("Access-Control-Allow-Origin", "*");
            res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
            next();
        });
        // Jobs.runRequiredJobs();
    }
    configureBodyParser() {
        this.app.use(bodyParser.urlencoded({ extended: true }));
    }
    setRoutes() {
        this.app.use('/src/uploads', express.static('src/uploads'));
        this.app.use('/api/user/', UserRouter_1.default);
        this.app.use('/api/post/', PostRouter_1.default);
        this.app.use('/api/comment/', CommentRouter_1.default);
        //Test api
        this.app.use('/api/groccery/', GrocceryRouter_1.default);
    }
    error404Handler() {
        this.app.use((req, res) => {
            res.status(404).json({
                message: "Not Found",
                status_code: 404
            });
        });
    }
    handleErrors() {
        this.app.use((error, req, res, next) => {
            const errorStatus = req.errorStatus || 500;
            res.status(errorStatus).json({
                message: error.message || 'Something went wrong please try again',
                status_code: errorStatus
            });
        });
    }
    connectMongodb() {
        const databaseUrl = env_1.getEnvironmentVariables().db_url;
        mongoose.connect(databaseUrl, { useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false }).then(() => console.log('connected to db'));
    }
}
exports.Server = Server;
