import { Location } from "./location.entity";
import { Price } from "./price.entity";
import { User } from "./user.entity";

class Event{
  constructor(
    public title: string,
    public location: Location,
    public date: Date,
    public description: string,
    public banner: string,
    public flyers: string[],
    public price: Price[],
    public coupons: string[],
    public city: string,
    public participants: User[]
  ){
  }
}

export { Event };
