import { Event } from "../../domain/entities/event.entity";
import { HttpError } from "../interfaces/http.error.interface";
import { IEventsRepository } from "../repositories/events.repository";

class EventsService{

  constructor(
    private eventRepository: IEventsRepository){}

  async create(eventData: Event){

    if(!eventData.banner) 
      throw new HttpError(400, 'Banner is required');
    if(!eventData.flyers) 
      throw new HttpError(400, 'Flyers is required');
    if(!eventData.location) 
      throw new HttpError(400, 'Location is required');
    
    const eventAlreadyExists = await this.eventRepository.findByLocationAndDate(
      eventData.location, 
      eventData.date
    );

    if(eventAlreadyExists) 
      throw new HttpError(400, 'An event already exists for this location and date');

    const eventResponse = await this.eventRepository.create(eventData);

    return eventResponse;
  }

  private getCityNameByLocation(latitude: string, longitude: string): string{

    return '';
  }

}

export { EventsService };
