import prismaClient from "../prisma";

export class ProductService {
    static async create(product: any) {
        return prismaClient.product.create({
            data: {
                name: product.name,
                description: product.description,
                price: product.price,
                image: product.image,
                rating: product.rating,
            }
        });
    }

    static async listAll() {
        return prismaClient.product.findMany();
    }
}