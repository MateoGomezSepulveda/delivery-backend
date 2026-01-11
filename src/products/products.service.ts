import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Product, ProductDocument } from './schemas/producct.schema';
import { Model } from 'mongoose';

@Injectable()
export class ProductsService {
    constructor(@InjectModel(Product.name) private productModel: Model<ProductDocument>) {}

    async create(productData: Partial<Product>) {
    const newProduct = new this.productModel(productData);
    return newProduct.save();
  }

  async findAll() {
    return this.productModel.find();
  }

  async findOne(id: string) {
    return this.productModel.findById(id);
  }

  async update(id: string, updateData: Partial<Product>) {
    return this.productModel.findByIdAndUpdate(id, updateData, { new: true });
  }

  async remove(id: string) {
    return this.productModel.findByIdAndDelete(id);
  }

}
