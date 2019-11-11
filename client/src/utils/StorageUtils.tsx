import * as engine from 'store/src/store-engine'
import * as sessionStorage from 'store/storages/sessionStorage'
//@ts-ignore
const store = engine.createStore(sessionStorage, [], 'JEXIA');

const StorageKeys = {
    TOKEN: 'Token',
    USER: 'User',
};


export const clearAllStorage = () => store.clearAll();

export const getUserToken = () => {
    const token = store.get(StorageKeys.TOKEN);
    if (!token) {
        return {};
    }
    return { token };
};

export const setUserToken = (token) => store.set(StorageKeys.TOKEN, token);
export const setUserData = (user) => store.set(StorageKeys.USER, user);
