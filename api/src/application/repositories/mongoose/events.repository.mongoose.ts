import { Event } from "../../../domain/entities/event.entity";
import { Location } from "../../../domain/entities/location.entity";
import { IEventsRepository } from "../events.repository";

import { EventModel } from "./events.model";

class EventsRepositoryMongoose implements IEventsRepository{
  
  async create(event: Event): Promise<Event>{
    const eventModel = new EventModel(event)

    await eventModel.save();
    
    return event;
  }

  async findByLocationAndDate(location: Location, date: Date): Promise<Event | null> {
    const event: any = await EventModel.findOne({
      location,
      date
    }).exec();

    return event ? event : null;
  }
  
}

export { EventsRepositoryMongoose };
