import { MongooseModule } from '@nestjs/mongoose';
import { Module } from '@nestjs/common';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { ProductsModule } from './products/products.module';
import { CategoriesModule } from './categories/categories.module';
import { CartModule } from './cart/cart.module';

@Module({
  imports: [
    MongooseModule.forRoot(
      'mongodb+srv://mateos2090_db_user:delivery_app@deliveryapp.u8jrjaj.mongodb.net/',
    ),
    UsersModule,
    AuthModule,
    ProductsModule,
    CategoriesModule,
    CartModule,
  ],
})
export class AppModule {}
