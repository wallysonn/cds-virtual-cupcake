import prismaClient from "../prisma";

export class CouponService {
    static async create(coupon: any) {
        return prismaClient.coupon.create({
            data: {
                code: coupon.code,
                discount: coupon.discount,
            }
        });
    }

    static async listAll() {
        return prismaClient.coupon.findMany();
    }

    static async findByCode(code: string) {
        return prismaClient.coupon.findUnique({
            where: {
                code: code
            }
        });
    }
}