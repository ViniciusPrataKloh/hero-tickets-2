import { Event } from "../../../domain/entities/event.entity";
import { Location } from "../../../domain/entities/location.entity";
import { IEventsRepository } from "../events.repository";

import { EventModel } from "./events.model";

class EventsRepositoryMongoose implements IEventsRepository{
  
  async create(event: Event): Promise<void>{
    const eventModel = new EventModel(event)

    await eventModel.save();
    
    return ;
  }

  async findByLocationAndDate(location: Location, date: Date): Promise<Event | undefined> {
    const event: any = await EventModel.findOne({
      location,
      date
    }).exec();

    return event ? event : undefined;
  }
  
}

export { EventsRepositoryMongoose };
