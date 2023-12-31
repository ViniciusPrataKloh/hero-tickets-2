import { Router } from "express";
import { EventsController } from "../controllers/events.controller";
import { EventsRepositoryMongoose } from "../repositories/mongoose/events.repository.mongoose";
import { EventsService } from "../services/events.service";
import { upload } from "../../infra/multer/multer";
import { EventsRepositoryInMemory } from "../repositories/inMemory/events.repository.inMemory";
import { UsersRepositoryInMemory } from "../repositories/inMemory/users.repository.inMemory";

class EventsRoutes {
  public router: Router;
  private eventsController: EventsController;

  constructor(){
    this.router = Router();
    // const eventsRepository = new EventsRepositoryMongoose();
    const eventsRepository = new EventsRepositoryInMemory();
    const usersRepository = new UsersRepositoryInMemory();
    const eventsService = new EventsService(eventsRepository, usersRepository);
    this.eventsController = new EventsController(eventsService);
    this.initRoutes();
  }

  initRoutes(){
    this.router.post('/', 
    upload.fields([
      {
        name: 'banner',
        maxCount: 1
      },
      {
        name: 'flyers',
        maxCount: 3
      }
    ]),
    this.eventsController.handleCreate.bind(this.eventsController));
    this.router.get('/', this.eventsController.handleGetEventsByLocation.bind(this.eventsController));
    this.router.get('/category', this.eventsController.handleGetEventsByCategory.bind(this.eventsController));
    this.router.get('/:id', this.eventsController.handleGetEventById.bind(this.eventsController));
    this.router.post('/:id/participant', this.eventsController.handleAddParticipant.bind(this.eventsController));
  }

}

export { EventsRoutes };
