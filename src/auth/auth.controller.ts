import {Body, Controller, Delete, Post, Req, UseGuards} from '@nestjs/common';
import {signupDTO} from "./DTO/signupDTO";
import {signinDTO} from "./DTO/signinDTO";
import {AuthService} from "./auth.service";
import {AuthGuard} from "@nestjs/passport";
import {Request} from "express";
import {deleteAccountDTO} from "./DTO/deleteAccountDTO";

interface RequestUser extends Express.User {
    userId: number;
    username: string;
    email: string;
    password: string;
    createdAt: Date;
    updatedAt: Date;
}

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
    deleteAccount(@Req() request : Request, @Body() deleteAccountDTO : deleteAccountDTO) {
        const userJson: RequestUser | undefined = request.user as RequestUser;

        return this.authService.deleteAccount(userJson.userId, deleteAccountDTO);
    }
}
