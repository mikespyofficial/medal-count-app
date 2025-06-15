import {MedalRank, MedalRankSortBy, MedalRankSortDirection} from '@/components/MedalRankList/types';

export function medalRankSort(medalA: MedalRank, medalB: MedalRank, sort?: MedalRankSortBy, sortDirection: MedalRankSortDirection = 'desc'): number {

    if (!sort) {
        return 0;
    }

    const sortByTier = (sortTier: MedalRankSortBy) => {
        return sortDirection === 'desc' ? medalB[sortTier] - medalA[sortTier] : medalA[sortTier] - medalB[sortTier];
    };

    const sortResult = sortByTier(sort);

    if (sortResult !== 0) {
        return sortResult;
    }

    if (sort === 'gold') {
        return sortByTier('silver');
    }

    return sortByTier('gold');
}
