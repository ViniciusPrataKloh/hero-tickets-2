import { NextFunction, Request, Response } from "express";
import { EventsService } from "../services/events.service";

class EventsController{

  constructor(private eventsService: EventsService){}
  
  async handleCreate(request: Request, response: Response, next: NextFunction){
    const eventData = request.body;
    
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
