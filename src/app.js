import express from 'express';
import logger from 'morgan';
import path from 'path';
import passport from 'passport';
import session from 'express-session';
import bodyParser from 'body-parser';
import cookieParser from 'cookie-parser';
import expressSanitizer from 'express-sanitizer';
import helmet from 'helmet';
import rfs from 'rotating-file-stream';
import './passport';
import { createServer } from "http";
import { Server } from "socket.io";


export default {
    setup: (config ) => {
        const app = express();
        const httpServer = createServer(app);
        const io = new Server(httpServer, { /* options */ });

        io.on('connection', (socket) => {
            console.log('a user connected');
            socket.on('disconnect', () => {
                console.log('user disconnected');
            });



        });
            var accessLogStream = rfs('access.log', {
            interval: '1d',
            path: path.join(__dirname, '..', 'log')
        })
        
        app.use(logger(config.app.log, { stream: accessLogStream }));

        app.use(bodyParser.urlencoded({ extended: true }));
        app.use(bodyParser.json({limit: '5 mb'}));
        app.use(express.json())

        app.use(cookieParser(config.app.secret));
        app.use(session({ secret: config.app.secret ,resave: true, saveUninitialized:true}));
        app.use("/photo", express.static(path.join(__dirname, 'public/images')));
        // app.use("/avatar", express.static(path.join(__dirname, 'public/images')));
        // app.use("/photoUrl", express.static(path.join(__dirname, 'public/images')));
        app.use(passport.initialize());
        app.use(passport.session());
        app.use(expressSanitizer());
        app.use(helmet());
        app.use(helmet.hsts({
            maxAge: 0
        }))

        Number.prototype.pad = function (size) {
            var s = String(this);
            while (s.length < (size || 2)) { s = "0" + s; }
            return s;
        }
        
        return app;
    }
}