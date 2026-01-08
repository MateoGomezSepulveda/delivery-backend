import { MongooseModule } from '@nestjs/mongoose';
import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://mateos2090_db_user:delivery_app@deliveryapp.u8jrjaj.mongodb.net/',
    ),
    UsersModule,
  ],
})
export class AppModule {}
