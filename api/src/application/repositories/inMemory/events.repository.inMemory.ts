import { Event } from "../../../domain/entities/event.entity";
import { Location } from "../../../domain/entities/location.entity";
import { IEventsRepository } from "../events.repository";

class EventsRepositoryInMemory implements IEventsRepository{

  constructor(
    private events: Event[] = []
  ){}

  async create(event: Event): Promise<void> {
    this.events.push(event);
    console.log(this.events);

    return;
  }

  async findByLocationAndDate(location: Location, date: Date): Promise<Event | undefined> {
    const event = this.events.find((event) => event.location === location && event.date === date);

    return event;
  }



}

export { EventsRepositoryInMemory };