import Api from 'api';
import { useEffect, useState } from 'react';

interface UseApiOpts {
    url?: string;
    config?: {
        method?: string,
        payload?: any
        onError?: (error) => void
        onSuccess?: (data) => void
    }
}

interface UseApiReturnValue {
    loading: boolean,
    data: any,
    error: any,
    doRequest: any,
    doGet: (opts: UseApiOpts) => void
    doPost: (opts: UseApiOpts) => void
    doPut: (opts: UseApiOpts) => void

}

const defaultConfig = { method: 'get', payload: {} };

export function useApi(opts?: UseApiOpts): UseApiReturnValue {
    const { url = '', config = {} } = opts || {};
    const [reload, setReload] = useState(Date.now());
    const [apiUrl, setApiUrl] = useState(url);

    const [apiConfig, setApiConfig] = useState({ ...defaultConfig, ...config });
    const { method, payload, onError, onSuccess } = apiConfig;

    const [loading, setLoading] = useState(!!url);
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);

    const fetchData = async () => {
        setLoading(true);
        try {
            const { ok, data } = await Api[method.toLowerCase()](apiUrl, payload);
            if (ok) {
                setData(data);
                onSuccess && onSuccess(data);
            } else {
                setError(data)
                onError && onError(data);
            }
        } catch (e) {
            setError(e)
            onError && onError(error);
        }
        setLoading(false);

    };


    const doGet = ({ url = '', config = defaultConfig }: UseApiOpts) => {
        doRequest({ url, config: { ...config, ...{ method: 'get' } } });
    }

    const doPost = ({ url = '', config = defaultConfig }: UseApiOpts) => {
        doRequest({ url, config: { ...config, ...{ method: 'post' } } });
    }

    const doPut = ({ url = '', config = defaultConfig }: UseApiOpts) => {
        doRequest({ url, config: { ...config, ...{ method: 'put' } } });
    }

    const doRequest = ({ url, config }) => {
        setData(null);
        setApiConfig(config);
        setApiUrl(url);
        setReload(Date.now());
    }

    useEffect(() => {
        if (!apiUrl) {
            return
        }
        fetchData();

    }, [reload])

    return { loading, data, error, doRequest, doGet, doPost, doPut }
}
