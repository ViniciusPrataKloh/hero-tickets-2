import { NextFunction, Request, Response } from "express";
import { HttpError } from "../interfaces/http.error.interface";

export function errorMiddleware(error: HttpError, request: Request, response: Response, next: NextFunction){
  const status: number = error.status ?? 500;
  const message: string = error.message ?? 'Internal server error';

  response.status(status).json({
    status, 
    message
  });
}