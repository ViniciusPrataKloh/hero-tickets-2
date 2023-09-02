import request from 'supertest';
import { App } from "../../../App";
import { HttpError } from '../../interfaces/http.error.interface';
import { IEvent } from '../../../domain/interfaces/event.interface';

const app = new App().app;
const date = new Date();

// INTEGRATION TESTS

describe("Integration Events Tests", () => {

  it('/POST Event, should be able to create a new event', async () => {
    let event = {
      title: "Jorge e Mateus",
      price: [{sector: 'pista', amount: '20'}],
      description: 'Descrição do evento',
      city: 'Belo Horizonte',
      location: {
        latitude: '-19.8658619',
        longitude: '-43.9737064'
      },
      categories: ['Show'],
      coupons: ['10OFF'],
      date: date,
      participants: []
    };

    let response = await request(app)
      .post('/events')
      .field('title', event.title)
      .field('description', event.description)
      .field('city', event.city)
      .field('date', event.date.toDateString())
      .field('coupons', event.coupons)
      .field('participants', event.participants)
      .field('categories', event.categories)
      .field('location[latitude]', event.location.latitude)
      .field('location[longitude]', event.location.longitude)
      .field('price[sector]', event.price[0].sector)
      .field('price[amount]', event.price[0].amount)
      .attach('banner', '/home/vinicius/Downloads/banner.png')
      .attach('flyers', '/home/vinicius/Downloads/banner.png')
      .attach('flyers', '/home/vinicius/Downloads/banner.png');

    event = {
        title: "Cine Evento",
        price: [{sector: 'pista', amount: '20'}],
        description: 'Descrição do evento',
        city: 'Rio de Janeiro',
        location: {
          latitude: '-00.000000',
          longitude: '-11.111111'
        },
        categories: ['Cinema'],
        coupons: ['10OFF'],
        date: new Date(),
        participants: []
      };
  
      response = await request(app)
        .post('/events')
        .field('title', event.title)
        .field('description', event.description)
        .field('city', event.city)
        .field('coupons', event.coupons)
        .field('participants', event.participants)
        .field('categories', event.categories)
        .field('location[latitude]', event.location.latitude)
        .field('location[longitude]', event.location.longitude)
        .field('price[sector]', event.price[0].sector)
        .field('price[amount]', event.price[0].amount)
        .attach('banner', '/home/vinicius/Downloads/banner.png')
        .attach('flyers', '/home/vinicius/Downloads/banner.png')
        .attach('flyers', '/home/vinicius/Downloads/banner.png');

    if(response.error){
      console.log('file > events.test.ts:39 > it > error:', response.error);
    }

    expect(response.status).toBe(201);
    expect(response.body.message).toEqual('Evento criado com sucesso.');
  });

  it('/GET event, should be able to get events by location', async () => {
    const response = await request(app)
      .get('/events?latitude=-19.8658619&longitude=-43.9737064');

    const events: IEvent[] = response.body.data;
    const wrongEvents: IEvent[] = events.filter((event) => event.city !== 'Belo Horizonte');

    expect(response.status).toBe(201);
    expect(events.length).toBeGreaterThanOrEqual(1);
    expect(wrongEvents.length).toEqual(0);
  });

  it('/GET event/category, should be able to get events by category', async () => {
    const response = await request(app)
      .get('/events/category?category=Show');

    const events: IEvent[] = response.body.data;
    const wrongEvents: IEvent[] = events.filter((event) => !event.categories.includes('Show'));

    expect(response.status).toBe(201);
    expect(events.length).toBeGreaterThanOrEqual(1);
    expect(wrongEvents.length).toEqual(0);
  });

  it('/GET event, should be able to get events by id', async () => {
    let response = await request(app)
      .get('/events/category?category=Show');

    let eventOld: IEvent = response.body.data[0];

    response = await request(app)
      .get(`/events/${eventOld.id}`);

    const event: IEvent = response.body.data;

    expect(response.status).toBe(201);
    expect(event.id).toEqual(eventOld.id);
  });

  it('/POST event, should be able to add a participant to an event', async () => {
    let response = await request(app)
      .get('/events/category?category=Show');

    let event: IEvent = response.body.data[0];

    response = await request(app)
      .post(`/events/${event.id}/participant`)
      .send({"name": "John Doe", "email": "john.doe@email.com"});

    response = await request(app)
      .get(`/events/${event.id}`);
    
    event = response.body.data;
    
    expect(response.status).toBe(201);
    expect(event.participants.length).toBeGreaterThanOrEqual(1);
  });

  it('/POST event, should not be able to create an event with the same location and date', async () => {
    expect(async () => {
      const event = {
        title: "Jorge e Mateus",
        price: [{sector: 'pista', amount: '20'}],
        description: 'Descrição do evento',
        city: 'Belo Horizonte',
        location: {
          latitude: '-19.8658619',
          longitude: '-43.9737064'
        },
        coupons: ['10OFF'],
        date: date,
        participants: []
      };
  
      await request(app)
        .post('/events')
        .field('title', event.title)
        .field('description', event.description)
        .field('city', event.city)
        .field('date', event.date.toDateString())
        .field('coupons', event.coupons)
        .field('participants', event.participants)
        .field('categories', ['Show'])
        .field('location[latitude]', event.location.latitude)
        .field('location[longitude]', event.location.longitude)
        .field('price[sector]', event.price[0].sector)
        .field('price[amount]', event.price[0].amount)
        .attach('banner', '/home/vinicius/Downloads/banner.png')
        .attach('flyers', '/home/vinicius/Downloads/banner.png')
        .attach('flyers', '/home/vinicius/Downloads/banner.png');
    }).rejects.toBeInstanceOf(HttpError);
  });
})