import { Event } from "../../domain/entities/event.entity";
import { IEvent } from "../../domain/interfaces/event.interface";
import { ILocation } from "../../domain/interfaces/location.interface";
import { HttpError } from "../interfaces/http.error.interface";
import { IEventsRepository } from "../repositories/events.repository";

import {v4 as uuid} from "uuid";

class EventsService{

  constructor(
    private eventRepository: IEventsRepository){}

  async create(eventData: IEvent): Promise<void>{
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

    const event = new Event(
      uuid(),
      eventData.title,
      eventData.location,
      eventData.date,
      eventData.description,
      eventData.banner,
      eventData.flyers,
      eventData.coupons,
      eventData.participants,
      eventData.price,
      eventData.city,
      eventData.categories,
      eventData.formattedAddress
    );

    await this.eventRepository.create(event);

    return;
  }

  private getCityNameByLocation(latitude: string, longitude: string): string{

    return 'Belo Horizonte';
  }

  async getEventsByLocation({latitude, longitude}: ILocation): Promise<Event[] | undefined>{
    const city = this.getCityNameByLocation(latitude, longitude);

    const events = await this.eventRepository.findByCity(city);
    
    return events;
  }

  async getEventsByCategory(category: string): Promise<Event[] | undefined>{
    const events = await this.eventRepository.findByCategory(category);

    return events;
  }

  async getEventById(id: string): Promise<Event | undefined>{
    const event = await this.eventRepository.findById(id);

    return event;
  }

}

export { EventsService };
