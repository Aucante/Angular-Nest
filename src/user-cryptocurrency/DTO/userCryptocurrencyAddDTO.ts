import {ApiProperty} from '@nestjs/swagger';
import {IsNotEmpty} from "class-validator"

export class userCryptocurrencyAddDTO {
    @ApiProperty()
    @IsNotEmpty()
    readonly userId : number
    @ApiProperty()
    @IsNotEmpty()
    readonly cryptocurrencyId : number
}