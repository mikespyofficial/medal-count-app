'use client';
import {useCallback} from 'react';
import {usePathname, useRouter, useSearchParams} from 'next/navigation';
import type {
    MedalRankSortBy,
    MedalRankSortDirection,
} from '@/components/MedalRankList/types';
import MedalRankList from '@/components/MedalRankList/MedalRankList';

export default function MedalRank() {
    const router = useRouter();
    const pathname = usePathname();
    const searchParams = useSearchParams();

    const createQueryString = useCallback(
        (newParams: { [key: string]: string }) => {
            const params = new URLSearchParams(searchParams.toString());
            Object.entries(newParams).forEach(([key, value]) => {
                params.set(key, value);
            });
            return params.toString();
        },
        [searchParams],
    );

    const onSortHandler = (sort: MedalRankSortBy) => {
        router.push(`${pathname}?${createQueryString({sort})}`);
    };

    return <MedalRankList
        sort={searchParams.get('sort') as MedalRankSortBy ?? 'gold'}
        sortDirection={searchParams.get('sortDirection') as MedalRankSortDirection}
        onSort={onSortHandler}/>;
};
