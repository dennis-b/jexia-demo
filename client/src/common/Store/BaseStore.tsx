import { AsyncRequest } from 'api';
import { ApiResponse } from 'apisauce';
import { observable, runInAction } from 'mobx';
import { AppStore } from '../../app/AppStore';

export class BaseStore {
    rootStore: AppStore;

    @observable asyncRequest = new AsyncRequest();

    constructor(rootStore) {
        this.rootStore = rootStore
    }

    async runWithAsync(asyncAction, asyncRequest = this.asyncRequest): Promise<ApiResponse<any> & { error: any }> {
        runInAction(() => asyncRequest.loading = true);

        const response = await asyncAction();
        runInAction(() => asyncRequest.loading = false);

        const { ok, data } = response;
        if (ok) {
            runInAction(() => asyncRequest.data = data)
            return response
        }

        runInAction(() => asyncRequest.error = response.problem);
        return { ...response, error: response.data.message }
    }

    wait(timeout) {
        return new Promise((resolve, reject) => {
            let id = setTimeout(() => {
                clearTimeout(id);
                resolve(true)
            }, timeout)
        })
    }


}
