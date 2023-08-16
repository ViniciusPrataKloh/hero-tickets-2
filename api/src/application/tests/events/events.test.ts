import request from 'supertest';
import { App } from "../../../App";

const app = new App().app;

// INTEGRATION TESTS

describe("Integration Events Tests", () => {

  it('/POST Event', async () => {
    const event = {
      title: "Jorge e Mateus",
      price: [{sector: 'pista', amount: '20'}],
      description: 'Descrição do evento',
      city: 'Belo Horizonte',
      location: {
        latitude: '-19.8658619',
        longitude: '-43.9737064'
      },
      coupons: [],
      date: new Date(),
      participants: []
    };

    const response = await request(app)
      .post('/events')
      .field('title', event.title)
      .field('description', event.description)
      .field('city', event.city)
      .field('coupons', event.coupons)
      .field('location[latitude]', event.location.latitude)
      .field('location[longitude]', event.location.longitude)
      .field('price[sector]', event.price[0].sector)
      .field('price[amount]', event.price[0].amount)
      .attach('banner', '/home/vinicius/Downloads/banner.png')
      .attach('flyers', '')
      .attach('flyers', '');

    if(response.error){
      console.log('file > events.test.ts:39 > it > error:', response.error);
    }

    expect(response.status).toBe(201);
    expect(response.body.message).toEqual('Evento criado com sucesso.');
  })

})