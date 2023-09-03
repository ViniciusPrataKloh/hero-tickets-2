import { App } from "../../../App";

it('', () => {
  App.prototype.listen = jest.fn().mockImplementationOnce(() => 
        'Server in running on port 3333'
  );

  const app = new App();
  
  // const res = app.listen();
  expect(app.listen()).toEqual('Server in running on port 3333');
});