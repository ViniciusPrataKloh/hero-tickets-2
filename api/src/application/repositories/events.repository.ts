import { Event } from "../../domain/entities/event.entity";
import { Location } from "../../domain/entities/location.entity";

export interface IEventsRepository{
  create(event: Event): Promise<void>;
  findByLocationAndDate(location: Location, date: Date): Promise<Event | undefined>;
}
