import { ApiResponse, create } from 'apisauce';
import { observable } from 'mobx';
import { getUserToken } from 'utils/StorageUtils';

export const API_ROOT = '/api';

export class AsyncRequest {
    @observable loading = false;
    @observable error = '';
    @observable data: any = {};

}

const api = create({ baseURL: API_ROOT, });

api.addRequestTransform(request => {
    const { token } = getUserToken();
    const authentication = request.headers['Authentication'];
    if (token && !authentication) {
        request.headers['Authentication'] = token;
    }
});

// api.addResponseTransform(response => {
//     const { status, ok } = response;
//     console.log(response)
//     if (!ok) {
//         response.data = { ...response.data, message: getErrorMessage(response) };
//     }
// });

export function setAuthenticationHeader({ token }) {
    api.setHeader('Authentication', `Bearer ${token}`)
}

const getErrorMessage = ({ data, status }: ApiResponse<any>) => {
    if (status >= 500 || typeof data.message !== "string" || data && !data.message) {
        return "generalError";
    }
    return data.message;
};


export default api;
