import { useEffect, useState } from "react";

export type LoadingStatus = 'loading' | 'received' | 'rejected';

export type FetchResponse<T> = {
    data: null | T,
    status: LoadingStatus,
    error: null | Error,
}

export const useFetch = <T>(url: string): FetchResponse<T> => {
    const [response, setResponse] = useState<FetchResponse<T>>({
        data: null,
        status: 'loading',
        error: null
    });

    useEffect(() => {
        let isSubscribed = true;

        const fetchData = async (): Promise<void> => {
            setResponse({ data: null, status: 'loading', error: null });
            try {
                const res = await fetch(url);
                const data = await res.json() as T;

                if (isSubscribed) {
                    setResponse({ data, status: 'received', error: null });
                }
            } catch (error) {
                if (isSubscribed && error instanceof Error) {
                    setResponse({ data: null, status: 'rejected', error });
                    console.error(error.name + '---' + error.message);
                }
            }
        }

        fetchData();

        return () => {
            isSubscribed = false;
        }
    }, [])

    return response;
}