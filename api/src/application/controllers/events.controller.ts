import { NextFunction, Request, Response } from "express";
import { EventsService } from "../services/events.service";
import { ILocation } from "../../domain/interfaces/location.interface";

class EventsController{

  constructor(private eventsService: EventsService){}
  
  async handleCreate(request: Request, response: Response, next: NextFunction){
    let eventData = request.body;

    const files: any = request.files;

    if(files){
      const banner = files.banner[0];
      const flyers = files.flyers;

      eventData = {
        ...eventData,
        banner: banner.filename,
        flyers: flyers.map((flyer: any) => flyer.filename)
      }
    }
    
    try {
      const eventsResponse = await this.eventsService.create(eventData);

      return response.status(201).json({
        message: 'Evento criado com sucesso.',
        data: eventsResponse
      })
    } catch (error) {
      next;
    }
  }

  async handleGetEventsByLocation(request: Request, response: Response, next: NextFunction){
    const { latitude, longitude } = request.query;

    try{
      const eventsResponse = await this.eventsService.getEventsByLocation({ latitude, longitude } as ILocation);

      return response.status(201).json({
        data: eventsResponse 
      });
    } catch(error){
      next;
    }
  }

  async handleGetEventsByCategory(request: Request, response: Response, next: NextFunction){
    const { category } = request.query; 

    try{
      const eventResponse = await this.eventsService.getEventsByCategory(category as string);

      return response.status(201).json({
        data: eventResponse 
      });
    } catch(error){
      next;
    }
  }

  async handleGetEventById(request: Request, response: Response, next: NextFunction){
    const { id } = request.params;

    try{
      const eventsResponse = await this.eventsService.getEventById(id);

      return response.status(201).json({
        data: eventsResponse 
      });
    } catch(error){
      next;
    }
  }

}

export { EventsController };
