import {Medal, MedalTier} from '@/lib/medal/types';

export type MedalRankSortBy = MedalTier | 'total';
export type MedalRankSortDirection = 'desc' | 'asc';

export type MedalRankProps = {
    sortBy?: MedalRankSortBy;
    sortDirection?: MedalRankSortDirection;
};

export type MedalRank = Medal & {
    total: number;
};
