import { CanActivate, Injectable, Logger } from '@nestjs/common';
import { verify } from 'jsonwebtoken';

@Injectable()
export class AuthGuard implements CanActivate {
    async canActivate(context): Promise<boolean> {
        const req = context.switchToHttp().getRequest();
        const bearerToken = req.headers.authorization;
        try {
            const { email } = await verify(bearerToken, 'secretKey') as any;
            req.user = { email };
        } catch (e) {
            Logger.warn(`not valid token : ${bearerToken}`);
            req.user = {};
        }

        return true;
    }
}
