import { Location } from "./location.entity";
import { Price } from "./price.entity";
import { User } from "./user.entity";

class Event{
  constructor(
    public id: string,
    public title: string,
    public location: Location,
    public date: Date,
    public description: string,
    public banner: string,
    public flyers: string[],
    public coupons: string[],
    public participants: User[],
    public price: Price[],
    public city: string,
    public categories: string[],
    public formattedAddress: string,
  ) {}
}

export { Event };
