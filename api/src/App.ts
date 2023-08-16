import express, { Application } from 'express';
import { errorMiddleware } from './application/middlewares/error.middleware';
import { EventsRoutes } from './application/routes/events.routes';
import { connect } from './infra/mongodb/database';

class App{
  public app: Application;
  
  private eventsRoutes = new EventsRoutes();

  constructor(){
    this.app = express();
    this.initMiddlewares();
    this.initRoutes();
    this.initInterceptionError();
    this.connectDatabase();
  }

  private initMiddlewares(){
    this.app.use(express.json());
    this.app.use(express.urlencoded({extended: true}));
  }

  private initRoutes(){
    this.app.use('/events', this.eventsRoutes.router);
  }

  private initInterceptionError(){
    this.app.use(errorMiddleware)
  }

  private connectDatabase(){
    connect();
  }

  listen(){
    this.app.listen(3333, () => {
      console.log("Server in running on port 3333");
    })
  }

}

export { App };
