// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-nocheck
import {medalRankSort} from '@/components/MedalRankList/utils';
import type {MedalRank} from '@/components/MedalRankList/types';

describe('MedalRankList/utils', () => {
    describe('medalRankSort()', () => {
        it('sorts by gold (default)', () => {
            const list: MedalRank[] = [
                {
                    code: 'CAN',
                    gold: 10,
                },
                {
                    code: 'NED',
                    gold: 18,
                },
                {
                    code: 'FRA',
                    gold: 12,
                },
            ];

            const sortedListDesc = list.sort((a, b) => medalRankSort(a, b, 'gold'));
            expect(sortedListDesc[0].code).toBe('NED');
            expect(sortedListDesc[1].code).toBe('FRA');
            expect(sortedListDesc[2].code).toBe('CAN');
        });

        it('sorts by gold with tiebreaker', () => {
            const list: MedalRank[] = [
                {
                    code: 'CAN',
                    gold: 10,
                    silver: 20,
                },
                {
                    code: 'NED',
                    gold: 18,
                    silver: 12,
                },
                {
                    code: 'FRA',
                    gold: 18,
                    silver: 14,
                },
            ];

            const sortedListDesc = list.sort((a, b) => medalRankSort(a, b, 'gold'));
            expect(sortedListDesc[0].code).toBe('FRA');
            expect(sortedListDesc[1].code).toBe('NED');
            expect(sortedListDesc[2].code).toBe('CAN');
        });

        it('sorts by silver', () => {
            const list: MedalRank[] = [
                {
                    code: 'CAN',
                    silver: 20,
                },
                {
                    code: 'NED',
                    silver: 12,
                },
                {
                    code: 'FRA',
                    silver: 14,
                },
            ];

            const sortedListDesc = list.sort((a, b) => medalRankSort(a, b, 'silver'));
            expect(sortedListDesc[0].code).toBe('CAN');
            expect(sortedListDesc[1].code).toBe('FRA');
            expect(sortedListDesc[2].code).toBe('NED');
        });

        it('sorts by silver with tiebreaker', () => {
            const list: MedalRank[] = [
                {
                    code: 'CAN',
                    gold: 50,
                    silver: 5,
                },
                {
                    code: 'NED',
                    gold: 18,
                    silver: 14,
                },
                {
                    code: 'FRA',
                    gold: 21,
                    silver: 14,
                },
            ];

            const sortedListDesc = list.sort((a, b) => medalRankSort(a, b, 'silver'));
            expect(sortedListDesc[0].code).toBe('FRA');
            expect(sortedListDesc[1].code).toBe('NED');
            expect(sortedListDesc[2].code).toBe('CAN');
        });

        it('sorts by bronze', () => {
            const list: MedalRank[] = [
                {
                    code: 'CAN',
                    bronze: 26,
                },
                {
                    code: 'NED',
                    bronze: 20,
                },
                {
                    code: 'FRA',
                    bronze: 32,
                },
            ];

            const sortedListDesc = list.sort((a, b) => medalRankSort(a, b, 'bronze'));
            expect(sortedListDesc[0].code).toBe('FRA');
            expect(sortedListDesc[1].code).toBe('CAN');
            expect(sortedListDesc[2].code).toBe('NED');
        });

        it('sorts by bronze with tiebreaker', () => {
            const list: MedalRank[] = [
                {
                    code: 'CAN',
                    gold: 2,
                    bronze: 6,
                },
                {
                    code: 'NED',
                    gold: 18,
                    bronze: 20,
                },
                {
                    code: 'FRA',
                    gold: 21,
                    bronze: 20,
                },
            ];

            const sortedListDesc = list.sort((a, b) => medalRankSort(a, b, 'bronze'));
            expect(sortedListDesc[0].code).toBe('FRA');
            expect(sortedListDesc[1].code).toBe('NED');
            expect(sortedListDesc[2].code).toBe('CAN');
        });

        it('sorts by total', () => {
            const list: MedalRank[] = [
                {
                    code: 'CAN',
                    total: 26,
                },
                {
                    code: 'NED',
                    total: 42,
                },
                {
                    code: 'FRA',
                    total: 4,
                },
            ];

            const sortedListDesc = list.sort((a, b) => medalRankSort(a, b, 'total'));
            expect(sortedListDesc[0].code).toBe('NED');
            expect(sortedListDesc[1].code).toBe('CAN');
            expect(sortedListDesc[2].code).toBe('FRA');
        });

        it('sorts by total with tiebreaker', () => {
            const list: MedalRank[] = [
                {
                    code: 'CAN',
                    gold: 2,
                    total: 6,
                },
                {
                    code: 'NED',
                    gold: 18,
                    total: 20,
                },
                {
                    code: 'FRA',
                    gold: 21,
                    total: 20,
                },
            ];

            const sortedListDesc = list.sort((a, b) => medalRankSort(a, b, 'total'));
            expect(sortedListDesc[0].code).toBe('FRA');
            expect(sortedListDesc[1].code).toBe('NED');
            expect(sortedListDesc[2].code).toBe('CAN');
        });

        it('keeps provided order when sorted by unexpected property', () => {
            const list: MedalRank[] = [
                {
                    code: 'CAN',
                    gold: 10,
                },
                {
                    code: 'NED',
                    gold: 18,
                },
                {
                    code: 'FRA',
                    gold: 12,
                },
            ];

            const sortedListDesc = list.sort((a, b) => medalRankSort(a, b, 'random'));
            expect(sortedListDesc[0].code).toBe('CAN');
            expect(sortedListDesc[1].code).toBe('NED');
            expect(sortedListDesc[2].code).toBe('FRA');
        });

        it('sorts with both values and tiebreakers equal', () => {
            const list: MedalRank[] = [
                {
                    code: 'CAN',
                    gold: 10,
                    silver: 20,
                },
                {
                    code: 'NED',
                    gold: 18,
                    silver: 20,
                },
                {
                    code: 'FRA',
                    gold: 18,
                    silver: 20,
                },
            ];

            const sortedListDesc = list.sort((a, b) => medalRankSort(a, b, 'gold'));
            expect(sortedListDesc[0].code).toBe('NED');
            expect(sortedListDesc[1].code).toBe('FRA');
            expect(sortedListDesc[2].code).toBe('CAN');
        });
    });
});
