import {ApiProperty} from "@nestjs/swagger";
import {IsNotEmpty} from "class-validator";

export class deleteAccountDTO {
    @ApiProperty()
    @IsNotEmpty()
    readonly password : string
}