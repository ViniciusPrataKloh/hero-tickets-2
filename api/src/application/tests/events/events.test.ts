import request from 'supertest';
import { App } from "../../../App";
import { HttpError } from '../../interfaces/http.error.interface';

const app = new App().app;

// INTEGRATION TESTS

describe("Integration Events Tests", () => {

  const date = new Date();

  it('/POST Event, should be able to create a new event', async () => {
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

    const response = await request(app)
      .post('/events')
      .field('title', event.title)
      .field('description', event.description)
      .field('city', event.city)
      .field('coupons', event.coupons)
      .field('categories', ['Show'])
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

  it('/POST event, should not be able to create an event with the same location and date', async () => {
    expect( async () => {
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
        .field('coupons', event.coupons)
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

    // it('/GET event, should be able to get events by city name', async () => {
    //     const events = await request(app)
    //     .get('/events')
    //     .field('city', 'Belo Horizonte');

    //     expect();
    // });
})