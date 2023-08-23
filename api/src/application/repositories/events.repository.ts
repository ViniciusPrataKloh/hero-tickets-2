import { Event } from "../../domain/entities/event.entity";
import { Location } from "../../domain/entities/location.entity";

export interface IEventsRepository{
  create(event: Event): Promise<Event>;
  findByLocationAndDate(location: Location, date: Date): Promise<Event | null>;
}
