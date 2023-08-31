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

  async findByCity(city: string): Promise<Event[] | undefined> {
    const events: any = await EventModel.find({city}).exec();

    return events ? events : undefined;
  }

  async findByCategory(category: string): Promise<Event[] | undefined> {
    const events: any = await EventModel.find({categories: category}).exec();

    return events ? events : undefined;
  }

  async findById(id: string): Promise<Event | undefined> {
    const event: any = await EventModel.findOne({id}).exec();

    return event? event : undefined;
  }

  
}

export { EventsRepositoryMongoose };
