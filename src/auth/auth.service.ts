import {ConflictException, Injectable} from '@nestjs/common';
import { signupDTO } from "./DTO/signupDTO";
import {PrismaService} from "../prisma/prisma.service";
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
    constructor(private readonly prismaService : PrismaService) {
    }
    async signup(signupDTO : signupDTO) {
        const {email, password, username} = signupDTO;
        const user = await this.prismaService.user.findUnique({where : {email}});
        if (user) throw new ConflictException("User already exists.");

        const hash = await bcrypt.hash(password, 10);

        await this.prismaService.user.create({data : {email, username, password : hash}});

        return {data : "User successfully created."};
    }
}
