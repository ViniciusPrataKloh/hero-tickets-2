import { Event } from "../../../domain/entities/event.entity";
import { Location } from "../../../domain/entities/location.entity";
import { IEvent } from "../../../domain/interfaces/event.interface";
import { IEventsRepository } from "../events.repository";

class EventsRepositoryInMemory implements IEventsRepository{

  constructor(
    private events: Event[] = []
  ){}

  async create(eventData: IEvent): Promise<void> {
    const event = new Event(
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

    this.events.push(event);

    return;
  }

  async findByLocationAndDate(location: Location, date: Date): Promise<Event | undefined> {
    const event = this.events.find((event) => event.location === location && event.date === date);

    return event;
  }



}

export { EventsRepositoryInMemory };