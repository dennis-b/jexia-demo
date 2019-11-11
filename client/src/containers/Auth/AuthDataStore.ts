import { action, observable } from 'mobx';
import { persist } from 'mobx-persist'

import { setUserData, setUserToken } from 'utils/StorageUtils';


export class AuthDataStore {

    @persist('object')
    @observable appToken = { token: null };

    @persist('object')
    @observable user = { name: null, email: null };

    constructor() {
    }

    @action
    setToken(token) {
        this.appToken = { token };
        setUserToken(token)
    }

    @action
    setUser(user) {
        this.user = user;
        setUserData(user);
    }

}
