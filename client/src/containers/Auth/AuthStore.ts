import { BaseStore } from 'common';
import { AuthDataStore } from 'containers/Auth/AuthDataStore';
import { action, computed } from 'mobx';
import { create } from 'mobx-persist';
import { AppStore } from '../../app/AppStore';

const hydrate = create({ storage: localStorage, jsonify: true })


export const authStoreSelector = ({ appStore }) => ({ authStore: appStore.authStore });

export class AuthStore extends BaseStore {

    authDataStore: AuthDataStore;

    constructor(rootStore: AppStore) {
        super(rootStore)
        this.authDataStore = new AuthDataStore()
        hydrate('authDataStore', this.authDataStore);
    }

    @action
    setAuthData({ token, name, email }) {
        this.authDataStore.setToken(token)
        this.authDataStore.setUser({ name, email })
    }

    @action
    logOut() {
        this.authDataStore.setToken(null)
        this.authDataStore.setUser({ name: null, email: null })
    }

    @computed
    get userData() {
        const authorized = this.authDataStore.appToken.token !== null;
        return { authorized, ...this.authDataStore.user, ...this.authDataStore.appToken }
    }

}
