import { Module } from '@nestjs/common';
import { TodoController } from './todo.controller';
import { TodoService } from './todo.service';
import { JexiaModule } from '../jexia/jexia.module';

@Module({
    imports: [JexiaModule],
    controllers: [TodoController],
    providers: [TodoService],
    exports: [TodoService],
})
export class TodoModule {
}
