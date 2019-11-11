import { createParamDecorator, Logger } from '@nestjs/common';
import { verify } from 'jsonwebtoken';

export const UseUser = createParamDecorator(async (data, req) => {
    try {
        const { email } = await verify(req.headers.authentication, 'secretKey') as any;
        return { email };
    } catch (e) {
        Logger.warn(`not valid token : ${req.headers.authentication}`);
        return {};
    }
});
