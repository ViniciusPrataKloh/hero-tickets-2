import { Router } from "express";
import { EventsController } from "../controllers/events.controller";
import { EventsRepositoryMongoose } from "../repositories/mongoose/events.repository.mongoose";
import { EventsService } from "../services/events.service";

class EventsRoutes {
  public router: Router;
  private eventsController: EventsController;

  constructor(){
    this.router = Router();
    const eventsRepository = new EventsRepositoryMongoose();
    const eventsService = new EventsService(eventsRepository);
    this.eventsController = new EventsController(eventsService);
    this.initRoutes();
  }

  initRoutes(){
    this.router.post('/', this.eventsController.handleCreate.bind(this.eventsController));
  }
}

export { EventsRoutes };
