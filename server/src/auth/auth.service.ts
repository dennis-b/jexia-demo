import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { JwtPayload, SignInUser, SignUpUser } from './interfaces/jwt-payload.interface';
import { JexiaService } from '../jexia/jexia.service';

@Injectable()
export class AuthService {
    constructor(private readonly jexiaService: JexiaService, private readonly jwtService: JwtService) {
    }

    async validateUser(payload: JwtPayload): Promise<any> {
        const { email } = payload;
        // return await this.jexiaService.isValid({ email });
        return true;
    }

    async signUp({ email, password }: SignUpUser) {
        const user = await this.jexiaService.signUp({ email, password });
        return { user };
    }

    async signIn({ email, password }: SignInUser): Promise<any> {
        const res = await this.jexiaService.signIn({ email, password });
        const token = this.jwtService.sign({ email });
        return { token };
    }

}
