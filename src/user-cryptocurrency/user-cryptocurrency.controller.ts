import {Body, Controller, Post} from '@nestjs/common';
import {UserCryptocurrencyService} from "./user-cryptocurrency.service";
import {ApiTags} from "@nestjs/swagger";
import {userCryptocurrencyAddDTO} from "./DTO/userCryptocurrencyAddDTO"

@ApiTags('User-Cryptocurrency')
@Controller('user-cryptocurrency')
export class UserCryptocurrencyController {
    constructor(private readonly userCryptocurrencyService: UserCryptocurrencyService) {}

    @Post('add')
    async addUserCryptocurrency(@Body() userCryptocurrencyAddDTO : userCryptocurrencyAddDTO) {
        console.log(userCryptocurrencyAddDTO)
        return this.userCryptocurrencyService.addUserCryptocurrency(userCryptocurrencyAddDTO);
    }
}
