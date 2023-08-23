import { NextFunction, Request, Response } from "express";
import { EventsService } from "../services/events.service";

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
      const createEventResponse = await this.eventsService.create(eventData);

      return response.status(201).json({
        message: 'Evento criado com sucesso.',
        data: createEventResponse
      })
    } catch (error) {
      next;
    }
  }

}

export { EventsController };
