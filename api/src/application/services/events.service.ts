import { Event } from "../../domain/entities/event.entity";
import { User } from "../../domain/entities/user.entity";
import { IEvent } from "../../domain/interfaces/event.interface";
import { ILocation } from "../../domain/interfaces/location.interface";
import { IUser } from "../../domain/interfaces/user.interface";
import { HttpError } from "../interfaces/http.error.interface";
import { IEventsRepository } from "../repositories/events.repository";

import { v4 as uuid } from "uuid";
import { IUsersRepository } from "../repositories/users.repository";
import { UsersService } from "./users.service";

class EventsService {

  constructor(
    private eventsRepository: IEventsRepository,
    private usersRepository: IUsersRepository
  ) { }

  async create(eventData: IEvent): Promise<void> {
    if (!eventData.banner)
      throw new HttpError(400, 'Banner is required');
    if (!eventData.flyers)
      throw new HttpError(400, 'Flyers is required');
    if (!eventData.location) {
      throw new HttpError(400, 'Location is required');
    }

    const eventAlreadyExists = await this.eventsRepository.findByLocationAndDate(
      eventData.location,
      eventData.date
    );

    if (eventAlreadyExists)
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
      [],
      eventData.price,
      eventData.city,
      eventData.categories,
      eventData.formattedAddress
    );

    await this.eventsRepository.create(event);

    return;
  }

  private getCityNameByLocation(latitude: string, longitude: string): string {
    return 'Belo Horizonte';
  }

  async getEventsByLocation({ latitude, longitude }: ILocation): Promise<Event[] | undefined> {
    if ((!latitude || latitude === '') || (!longitude || longitude === '')) {
      throw new HttpError(400, 'Latitude and longitude are required');
    }

    const city = this.getCityNameByLocation(latitude, longitude);

    const events = await this.eventsRepository.findByCity(city);

    return events;
  }

  async getEventsByCategory(category: string): Promise<Event[] | undefined> {
    if (!category || category === undefined || category === '') {
      throw new HttpError(400, 'Category is required');
    }

    const events = await this.eventsRepository.findByCategory(category);

    return events;
  }

  async getEventById(id: string): Promise<Event | undefined> {
    if (!id || id === undefined || id === '') {
      throw new HttpError(400, 'id is required');
    }

    const event = await this.eventsRepository.findById(id);

    if (!event) throw new HttpError(400, 'Invalid event id');

    return event;
  }

  async addParticipants(id: string, name: string, email: string): Promise<void> {
    // if(
    //   (id === undefined || id === '') ||
    //   (name === undefined || name === '') ||
    //   (email === undefined || email === '')
    // ){
    //   throw new HttpError(400, 'Id, name and email are required');
    // }

    const event: Event | undefined = await this.getEventById(id);

    const usersService = new UsersService(this.usersRepository);
    const participantId = await usersService.create({ name, email });

    event?.participants.push(participantId);
    await this.eventsRepository.addParticipantToEvent(event as Event);

    return;
  }

}

export { EventsService };
