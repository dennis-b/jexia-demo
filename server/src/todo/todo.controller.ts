import { Controller, Delete, Get, Param, Post, Put } from '@nestjs/common';
import { Body } from '@nestjs/common/decorators/http/route-params.decorator';
import { TodoService } from './todo.service';
import { UseUser } from '../common/use-user.decorator';

@Controller('/todos')
export class TodoController {
    constructor(private readonly todoService: TodoService) {
    }

    @Get()
    list(@UseUser() user) {
        return this.todoService.list(user);
    }

    @Post()
    save(@Body() todo, @UseUser() user) {
        return this.todoService.save(todo, user);
    }

    @Post('delete')
    delete(@Body() todo, @UseUser() user) {
        return this.todoService.delete(todo, user);
    }

    @Put()
    update(@Body() body, @UseUser() user) {
        return this.todoService.update(body, user);
    }
}
