import {Body, Controller, Param, Post} from '@nestjs/common';
import {UserCryptocurrencyService} from "./user-cryptocurrency.service";

@Controller('user-cryptocurrency')
export class UserCryptocurrencyController {
    constructor(private readonly userCryptocurrencyService: UserCryptocurrencyService) {}

    @Post('add')
    async addUserCryptocurrency(@Body() requestBody: { userId: number, cryptocurrencyId: number }) {
        const { userId, cryptocurrencyId } = requestBody;
        return this.userCryptocurrencyService.addUserCryptocurrency(userId, cryptocurrencyId);
    }
}
