import { Injectable } from '@nestjs/common';
import {PrismaService} from "../prisma/prisma.service";
import {userCryptocurrencyAddDTO} from "./DTO/userCryptocurrencyAddDTO";

@Injectable()
export class UserCryptocurrencyService {
    constructor(private readonly prisma: PrismaService) {}

    async addUserCryptocurrency(userCryptocurrencyAddDTO : userCryptocurrencyAddDTO) {
        const { userId, cryptocurrencyId } = userCryptocurrencyAddDTO;
        return this.prisma.userCryptocurrency.create({
            data: {
                userId,
                cryptocurrencyId,
            },
        });
    }
}
