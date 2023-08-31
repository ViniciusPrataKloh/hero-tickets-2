import { Event } from "../../domain/entities/event.entity";
import { Location } from "../../domain/entities/location.entity";

export interface IEventsRepository{
  create(event: Event): Promise<void>;
  findByLocationAndDate(location: Location, date: Date): Promise<Event | undefined>;
  findByCity(city: string): Promise<Event[] | undefined>;
  findByCategory(category: string): Promise<Event[] | undefined>;
  findById(id: string): Promise<Event | undefined>;
  addParticipantToEvent(event: Event): Promise<void>;
}
