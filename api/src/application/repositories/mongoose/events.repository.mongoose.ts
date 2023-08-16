import { Event } from "../../../domain/entities/event.entity";
import { IEventsRepository } from "../events.repository";

import { EventModel } from "./events.model";

class EventsRepositoryMongoose implements IEventsRepository{

  async create(event: Event): Promise<Event>{
    const eventModel = new EventModel(event)

    await eventModel.save();
    
    return event;
  }
  
}

export { EventsRepositoryMongoose };
