import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { User, UserDocument } from './schema/users.schema';
import { CreateUserDto } from './dto/create-user.dto';
import * as bcrypt from 'bcrypt';
import { UpdateUserDto } from './dto/update-user.dto';

@Injectable()
export class UsersService {
  constructor(@InjectModel(User.name) private userModel: Model<UserDocument>) {}
  findAll() {
    return this.userModel.find();
  }

  async create(userData: CreateUserDto) {
    const hashedPassword = await bcrypt.hash(userData.password, 10);

    const newUser = new this.userModel({
      ...userData,
      password: hashedPassword,
    });
    return newUser.save();
  }

  async findOne(id: string) {
    return this.userModel.findById(id).select('-password').exec();
  }

  async update(id: string, updateData: UpdateUserDto) {
    return this.userModel.findByIdAndUpdate(
    id,
    updateData,
    { new: true },
  );
  }

  async remove(id: string) {
    return this.userModel.findByIdAndDelete(id);
  }
}
