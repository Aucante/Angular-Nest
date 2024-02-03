import {Body, Controller, Post} from '@nestjs/common';
import {signupDTO} from "./DTO/signupDTO";
import {AuthService} from "./auth.service";

@Controller('auth')
export class AuthController {
    constructor(private readonly authService : AuthService) {
    }
    @Post("signup")
    signup(@Body() signupDTO : signupDTO) {
        return this.authService.signup(signupDTO);
    }
}
