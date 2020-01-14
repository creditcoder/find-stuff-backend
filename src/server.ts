import express from 'express';
import morgan from 'morgan';
import helmet from 'helmet';
import mongoose from 'mongoose';
import compression from 'compression';
import cors from 'cors';

import indexRoutes from './routes/indexRoutes';
import postRoutes from './routes/postRoutes';
import userRoutes from './routes/userRoutes';
import authRoutes from './routes/authRoutes';

class Server{

    public app: express.Application;

    constructor(){
        this.app = express();
        this.config();
        this.routes();
    }

    config(){

        // db
        const MONGO_URI = 'mongodb://localhost/restapimongo';
        mongoose.set('useFindAndModify', true);
        mongoose.connect(process.env.MONGODB_URI || MONGO_URI,{
            useNewUrlParser: true,
            useCreateIndex: true,
            useUnifiedTopology: true,
            useFindAndModify : false
        })
        .then(db => console.log('DB is connected'));

        // settings
        this.app.set('port', process.env.PORT || 3000);

        // middlewares
        this.app.use(morgan('dev'));
        this.app.use(express.json());
        this.app.use(express.urlencoded({extended:false}));
        this.app.use(helmet());
        this.app.use(compression());
        this.app.use(cors());
    }

    routes(){
        this.app.use(indexRoutes);
        this.app.use('/api/posts', postRoutes);
        this.app.use('/api/users', userRoutes);
        this.app.use('/api/auth', authRoutes);
    }

    start(){
        this.app.listen(this.app.get('port'), () =>{
            console.log('Server on port', this.app.get('port'));
        });
    }

}

const server = new Server();
server.start();