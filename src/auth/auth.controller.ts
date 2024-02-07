import {Body, Controller, Delete, Post, UseGuards} from '@nestjs/common';
import {signupDTO} from "./DTO/signupDTO";
import {signinDTO} from "./DTO/signinDTO";
import {AuthService} from "./auth.service";
import {AuthGuard} from "@nestjs/passport";

@Controller('auth')
export class AuthController {
    constructor(private readonly authService : AuthService) {
    }
    @Post("signup")
    signup(@Body() signupDTO : signupDTO) {
        return this.authService.signup(signupDTO);
    }

    @Post("signin")
    signin(@Body() signinDTO : signinDTO) {
        return this.authService.signin(signinDTO);
    }

    @UseGuards(AuthGuard("jwt"))
    @Delete("delete")
    deleteAccount() {
        return "account deleted";
    }
}
