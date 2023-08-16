import { Event } from "../../domain/entities/event.entity";
import { IEventsRepository } from "../repositories/events.repository";

class EventsService{

  constructor(
    private eventRepository: IEventsRepository){}

  async create(eventData: Event){
    const eventResponse = await this.eventRepository.create(eventData);

    return eventResponse;
  }

}

export { EventsService };
