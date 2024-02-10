import {IsNotEmpty} from "class-validator";

export class deleteAccountDTO {
    @IsNotEmpty()
    readonly password : string
}