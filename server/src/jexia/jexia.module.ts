import { Module } from '@nestjs/common';
import { JexiaController } from './jexia.controller';
import { JexiaService } from './jexia.service';

@Module({
    imports: [],
    controllers: [JexiaController],
    providers: [JexiaService],
    exports: [JexiaService],
})
export class JexiaModule {
}
