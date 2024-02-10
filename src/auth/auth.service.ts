import {ConflictException, Injectable, NotFoundException, UnauthorizedException} from '@nestjs/common';
import { signupDTO } from "./DTO/signupDTO";
import {PrismaService} from "../prisma/prisma.service";
import * as bcrypt from 'bcrypt';
import {signinDTO} from "./DTO/signinDTO";
import {JwtService} from "@nestjs/jwt";
import {ConfigService} from "@nestjs/config";
import {deleteAccountDTO} from "./DTO/deleteAccountDTO";

@Injectable()
export class AuthService {
    constructor(
        private readonly prismaService : PrismaService,
        private readonly jwtService : JwtService,
        private readonly configService : ConfigService
    ) {}
    async signup(signupDTO : signupDTO) {
        const {email, password, username} = signupDTO;
        const user = await this.prismaService.user.findUnique({where : {email}});
        if (user) throw new ConflictException("User already exists.");

        const hash = await bcrypt.hash(password, 10);

        await this.prismaService.user.create({data : {email, username, password : hash}});

        return {data : "User successfully created."};
    }

    async signin(signinDTO : signinDTO) {
        const {email, password} = signinDTO;
        const user = await this.prismaService.user.findUnique({where : {email}});
        if (!user) throw new NotFoundException("User not found");
        const isMatched = await bcrypt.compare(password, user.password);
        if (!isMatched) throw new UnauthorizedException("Password doesn't match.");
        const payload = {
            sub : user.userId,
            email : user.email
        }
        const token = this.jwtService.sign(payload, {
            expiresIn : "2h",
            secret : this.configService.get('SECRET_KEY')
        })

        return {
            token, user : {
                username : user.username
            }
        }
    }

    async deleteAccount(userId : number, deleteAccountDTO : deleteAccountDTO) {
        console.log(userId)
        const {password} = deleteAccountDTO;
        const user = await this.prismaService.user.findUnique({where : {userId}});
        if (!user) throw new NotFoundException("User not found");

        const isMatched = await bcrypt.compare(password, user.password);
        if (!isMatched) throw new UnauthorizedException("Password doesn't match.");
        await this.prismaService.user.delete({where : {userId}});
        return {data : 'User deleted succesfully.'};
    }
}
