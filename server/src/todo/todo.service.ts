import { Injectable } from '@nestjs/common';
import { JexiaService } from '../jexia/jexia.service';
import { Dataset, field } from 'jexia-sdk-js';

@Injectable()
export class TodoService {
    private todos: Dataset<any>;

    constructor(private readonly jexiaService: JexiaService) {
        this.todos = jexiaService.getDataModule().dataset('todo');
    }

    async list({ email }) {
        const todos = await this.todosForUser({ email }).select().execute();
        return { ok: true, todos };

    }

    async save({ value }, { email }) {
        const [todo] = await this.todosForUser({ email })
            .insert({ value, completed: false })
            .execute();
        return { ok: true, todo };
    }

    async delete({ id }, { email }) {
        const [todo] = await this.todosForUser({ email })
            .delete()
            .where(field('id').isLike(id))
            .execute();

        return { ok: true, todo };
    }

    async update({ id, completed }, { email }) {
        const [todo] = await this.todosForUser({ email })
            .update({ completed })
            .where(field('id').isLike(id))
            .execute();

        return { ok: true, todo };
    }

    private todosForUser({ email }): Dataset<any> {
        return this.jexiaService.getDataModule().dataset('todo', email);
    }
}
