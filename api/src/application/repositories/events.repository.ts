import { Event } from "../../domain/entities/event.entity";

export interface IEventsRepository{
  create(event: Event): Promise<Event>;
}
