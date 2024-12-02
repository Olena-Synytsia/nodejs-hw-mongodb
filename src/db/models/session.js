import { model, Schema } from 'mongoose';

const usersSchema = new Schema({
  userId: { type: String, required: true },
  accessToken: {
    type: String,
    required: true,
  },
  refreshToken: { type: String, required: true },
  accessTokenValidUntil: { type: Date, required: true },
  refreshTokenValidUntil: { type: Date, required: true },
});

export const SessionsCollection = model('session', usersSchema);