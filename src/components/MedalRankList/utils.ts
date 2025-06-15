import {MedalRank, MedalRankSortBy, MedalRankSortDirection} from '@/components/MedalRankList/types';

export function medalRankSort(medalA: MedalRank, medalB: MedalRank, sortBy: MedalRankSortBy, sortDirection: MedalRankSortDirection = 'desc'): number {
    const sortByTier = (sortTier: MedalRankSortBy) => {
        return sortDirection === 'desc' ? medalB[sortTier] - medalA[sortTier] : medalA[sortTier] - medalB[sortTier];
    };

    const sortResult = sortByTier(sortBy);

    if (sortResult !== 0) {
        return sortResult;
    }

    if (sortBy === 'gold') {
        return sortByTier('silver');
    }

    return sortByTier('gold');
}
