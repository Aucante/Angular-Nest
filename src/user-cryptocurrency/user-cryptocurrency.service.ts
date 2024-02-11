import { Injectable } from '@nestjs/common';
import {PrismaService} from "../prisma/prisma.service";

@Injectable()
export class UserCryptocurrencyService {
    constructor(private readonly prisma: PrismaService) {}

    async addUserCryptocurrency(userId: number, cryptocurrencyId: number) {
        return this.prisma.userCryptocurrency.create({
            data: {
                userId,
                cryptocurrencyId,
            },
        });
    }
}
