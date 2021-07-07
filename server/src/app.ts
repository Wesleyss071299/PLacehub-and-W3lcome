import * as dotenv from "dotenv";
import express from 'express'
import cors from 'cors'
import mongoose from 'mongoose'
import path from 'path'
import morgan from 'morgan'

import routes from './routes'

dotenv.config();

class App {
    public express: express.Application
    
    public constructor () {
      this.express = express()
      this.middleware()
      this.database()
      this.routes()
    }
    
    private middleware (): void {
      this.express.use(express.json())
      this.express.use(cors())
      this.express.use(express.urlencoded({ extended: true }))
      this.express.use(morgan('dev'))
      this.express.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads')))
    }

    private database (): void {
      mongoose.connect(`mongodb+srv://${process.env.DB_USERNAME}:${process.env.DB_PASSWORD}@api.j4wgd.mongodb.net/myFirstDatabase?retryWrites=true&w=majority`, {
        useUnifiedTopology: true,
        useNewUrlParser: true,
        useFindAndModify: false 
      }).then(() => {
        console.log('Connected to DB!')
      }).catch(err => {
        console.log('Error:', err.message)
      })
    }

    private routes (): void {
      this.express.use(routes)
    }
}

export default new App().express
