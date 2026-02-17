import { BadRequestException, Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Order, OrderDocument } from './schemas/order.schema';
import { Model } from 'mongoose';
import { CartService } from 'src/cart/cart.service';

@Injectable()
export class OrdersService {
    constructor(
        @InjectModel(Order.name) private orderModel: Model<OrderDocument>,
        private cartService: CartService,
    ){}

    async createOrder(userId: string, address: string){
        const cart = await this.cartService.getActiveCart(userId);

        if(!cart.items.length){
            throw new BadRequestException('Cart is empty');
        }

        const orderItems = cart.items.map((item) => ({
            productId: item.productId,
            name: item.productId.toString(),
            quantity: item.quantity,
            price: item.price,
        }));

        const order = new this.orderModel({
            userId,
            items: orderItems,
            total: cart.total,
            address,
        });

        cart.status = 'CHECKED_OUT';
        await cart.save();

        return order.save();
    }

    async findMyOrders(userId: string){
        return this.orderModel
        .find({ userId })
        .populate('items.productId');
    }

    async findAllOrders(){
        return this.orderModel
        .find()
        .populate('items.productId')
        .populate('userId');
    }

    async updateStatus(orderId: string, status: string){
        return this.orderModel.findByIdAndUpdate(
            orderId,
            { status },
            { new: true },
        );
    }
}
