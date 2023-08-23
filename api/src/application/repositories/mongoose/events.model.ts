import mongoose from "mongoose";

const eventSchema = new mongoose.Schema({
  title: String,
  location: {
    latitude: String,
    longitude: String,
  },
  date: Date,
  createdAt: {
    type: Date,
    default: Date.now,
  },
  description: String,
  categories: [String],
  banner: String,
  flyers: [String],
  price: {
    type: Array,
  },
  city: String,
  formattedAddress: String,
  participants: {
    type: Array,
    ref: 'User',
  },
});

export const EventModel = mongoose.model('Event', eventSchema);