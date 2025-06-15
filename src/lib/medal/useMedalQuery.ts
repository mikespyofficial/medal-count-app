import {useEffect, useState} from 'react';
import {fetchMedalList} from '@/lib/medal/medalApi';
import type {Medal} from '@/lib/medal/types';

export function useMedalQuery() {
    const [medalList, setMedalList] = useState<Medal[]>([]);
    const [error, setError] = useState<Error | null>(null);
    const [isLoading, setIsLoading] = useState(true);

    useEffect(() => {
        let isMounted = true;

        (async () => {
            try {
                const medalList = await fetchMedalList();
                if (isMounted) {
                    setMedalList(medalList);
                }
            } catch (err: unknown) {
                if (err instanceof Error) {
                    setError(err as Error);
                }
            }
            setIsLoading(false);
        })();

        return () => {
            isMounted = false;
        };
    }, []);

    return {value: medalList, isLoading, error};
}
