export interface IEvent{
  id: string;
  title: string;
  location: any;
  date: Date;
  description: string;
  banner: string;
  flyers: string[];
  price: any[];
  coupons: string[];
  participants: string[];
  categories: string[];
  city: string;
  formattedAddress: string;
}