import type {Medal} from '@/lib/medal/types';

export async function fetchMedalList(): Promise<Medal[]> {
    const response = await fetch('/medals.json');

    if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
    }

    return await response.json();
}
