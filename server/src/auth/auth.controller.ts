import { Controller, Post } from '@nestjs/common';
import { Body } from '@nestjs/common/decorators/http/route-params.decorator';
import { AuthService } from './auth.service';
import { SignInUser, SignUpUser } from './interfaces/jwt-payload.interface';

@Controller('/auth')
export class AuthController {
    constructor(private readonly authService: AuthService) {
    }

    @Post('signin')
    signIn(@Body() user: SignInUser) {
        return this.authService.signIn(user);
    }

    @Post('signup')
    signUp(@Body() user: SignUpUser) {
        return this.authService.signUp(user);
    }

    // @Get(':id')
    // get(@Param() params) {
    //     return this.productService.getUser(params.id);
    // }
    //
    // @Post()
    // create(@Body() user: User) {
    //     return this.productService.createUser(user);
    // }
    //
    // @Put()
    // update(@Body() user: User) {
    //     return this.productService.updateUser(user);
    // }
    //
    // @Delete(':id')
    // deleteUser(@Param() params) {
    //     return this.productService.deleteUser(params.id);
    // }
}
