import {Medal, MedalTier} from '@/lib/medal/types';

export type MedalRankSortBy = MedalTier | 'total';
export type MedalRankSortDirection = 'desc' | 'asc';

export type MedalRankProps = {
    sort?: MedalRankSortBy;
    sortDirection?: MedalRankSortDirection;
    onSort?: (sort: MedalRankSortBy) => void;
};

export type MedalRank = Medal & {
    total: number;
};

