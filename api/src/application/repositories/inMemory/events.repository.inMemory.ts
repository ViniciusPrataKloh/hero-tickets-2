import { Event } from "../../../domain/entities/event.entity";
import { Location } from "../../../domain/entities/location.entity";
import { IEvent } from "../../../domain/interfaces/event.interface";
import { IEventsRepository } from "../events.repository";

import {v4 as uuid} from "uuid";

class EventsRepositoryInMemory implements IEventsRepository{

  constructor(
    private events: Event[] = []
  ){}

  async create(event: IEvent): Promise<void> {
    // const event = new Event(
    //   uuid(),
    //   eventData.title,
    //   eventData.location,
    //   eventData.date,
    //   eventData.description,
    //   eventData.banner,
    //   eventData.flyers,
    //   eventData.coupons,
    //   eventData.participants,
    //   eventData.price,
    //   eventData.city,
    //   eventData.categories,
    //   eventData.formattedAddress
    // );

    this.events.push(event);

    return;
  }

  async findByLocationAndDate(location: Location, date: Date): Promise<Event | undefined> {
    const event = this.events.find((event) => event.location === location && event.date === date);

    return event;
  }

  async findByCity(city: string): Promise<Event[] | undefined> {
    const events = this.events.filter((event) => event.city === city);

    return events;
  }

  async findByCategory(category: string): Promise<Event[] | undefined> {
    const events = this.events.filter((event) => event.categories.includes(category));

    return events;
  }

  async findById(id: string): Promise<Event | undefined> {
    const event = this.events.find((event) => event.id === id);

    return event;
  }

  async addParticipantToEvent(eventUpdate: Event): Promise<void>{
    const id = eventUpdate.id;

    let events = this.events.filter((event) => event.id !== id);

    this.events = events;
    events.push(eventUpdate);

    return;
  }

}

export { EventsRepositoryInMemory };