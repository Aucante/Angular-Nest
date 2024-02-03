import { Injectable } from '@nestjs/common';
import { signupDTO } from "./DTO/signupDTO";

@Injectable()
export class AuthService {
    signup(signupDTO : signupDTO) {
        return;
    }
}
