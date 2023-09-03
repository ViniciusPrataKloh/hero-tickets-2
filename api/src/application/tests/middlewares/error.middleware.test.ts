import { NextFunction, Request, Response } from "express";
import { HttpError } from "../../interfaces/http.error.interface";
import { errorMiddleware } from "../../middlewares/error.middleware";

describe("HTTP Error Middleware", () => {

  it('should respond with the correct status and message HttpException', async () => {
    const httpError: HttpError = {
      name: 'Http Error',
      status: 404,
      message: 'Not found'
    };

    const request: Partial<Request> = {};
    const response: Partial<Response> = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };
    const next: NextFunction = jest.fn();

    errorMiddleware(httpError, request as Request, response as Response, next);

    expect(response.status).toHaveBeenCalledWith(404);
    expect(response.json).toHaveBeenCalledWith({
      status: 404,
      message: 'Not found',
    });
  });

});