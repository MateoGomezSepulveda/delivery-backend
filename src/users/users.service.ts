import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument } from './schema/users.schema';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}
  findAll() {
    return this.userModel.find();
  }

  async create(userData: Partial<User>) {
    const newUser = new this.userModel(userData);
    return newUser.save();
  }
}
