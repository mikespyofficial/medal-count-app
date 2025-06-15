import type {Medal} from '@/lib/medal/types';
import {sleep} from '@/lib/utils';

export async function fetchMedalList(): Promise<Medal[]> {
    await sleep(1000);
    const response = await fetch('/medals.json');

    if (!response.ok) {
        throw new Error(`Error with status: ${response.status}`);
    }

    return await response.json();
}
