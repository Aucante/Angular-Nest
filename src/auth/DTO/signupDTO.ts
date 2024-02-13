import {ApiProperty} from '@nestjs/swagger';
import {IsEmail, IsNotEmpty} from "class-validator"

export class signupDTO {
    @ApiProperty()
    @IsNotEmpty()
    readonly username : string
    @ApiProperty()
    @IsNotEmpty()
    @IsEmail()
    readonly email : string
    @ApiProperty()
    @IsNotEmpty()
    readonly password : string
}