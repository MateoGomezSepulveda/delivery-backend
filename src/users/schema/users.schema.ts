import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

@Schema({ timestamps: true })
export class User extends Document {
  @Prop({ required: true })
  name: string;

  @Prop({ unique: true })
  email: string;

  @Prop({ required: true })
  password: string;

  @Prop({ default: 'USER' })
  role: string;
}

export type UserDocument = User & Document;

export const UserSchema = SchemaFactory.createForClass(User);
