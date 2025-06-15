'use client';
import {useMedalQuery} from '@/lib/medal/useMedalQuery';
import MedalBadge from '@/components/MedalBadge/MedalBadge';
import type {MedalRank, MedalRankProps} from '@/components/MedalRankList/types';
import {medalRankSort} from '@/components/MedalRankList/utils';
import CountryFlag from '@/components/CountryFlag/CountryFlag';

const gridItemClassNames = [
    'grid',
    'col-span-full',
    'grid-cols-subgrid',
].join(' ');

const gridBodyColumnClassNames = [
    'flex',
    'items-center',
    'py-1',
    'border-b',
    'border-gray-300',
].join(' ');

const gridHeadColumnClassNames = [
    'flex',
    'items-center',
    'py-2',
    'border-b-2',
    'border-gray-500',
].join(' ');

export default function MedalRankList({sort, sortDirection, onSort}: MedalRankProps) {
    const {value: medalList, isLoading, error} = useMedalQuery();

    const medalRankList: MedalRank[] = medalList
        .map(medal => ({
            ...medal,
            total: (medal.gold ?? 0) + (medal.silver ?? 0) + (medal.bronze ?? 0),
        }))
        .sort((a, b) => medalRankSort(a, b, sort, sortDirection ?? 'desc'))
        .slice(0, 10);

    const ariaSortedValue = sortDirection === 'asc' ? 'ascending' : 'descending';

    return (<div className='relative w-full'>
            <table
                className='w-full grid grid-cols-[repeat(2,max-content)_1fr_repeat(4,minmax(3.5rem,max-content))] text-gray-500 overflow-x-auto'>

                <caption className='uppercase col-start-1 col-end-8 text-start text-2xl text-gray-400'>Medal Count
                </caption>

                <thead className={gridItemClassNames}>
                <tr className={gridItemClassNames}>
                    <th className={`${gridHeadColumnClassNames} border-b border-gray-300`}>
                        <span className='sr-only'>Position</span>
                    </th>
                    <th className={`${gridHeadColumnClassNames} border-b border-gray-300`}>
                        <span className='sr-only'>Country flag</span>
                    </th>
                    <th className={`${gridHeadColumnClassNames} border-b border-gray-300`}>
                        <span className='sr-only'>Country code</span>
                    </th>
                    <th
                        className={`${gridHeadColumnClassNames} ${sort === 'gold' ? 'border-t-2' : ''} justify-center border-b border-gray-300`}
                        aria-sort={sort === 'gold' ? ariaSortedValue : 'none'}
                    >
                        <button type='button' className='cursor-pointer' onClick={() => onSort?.('gold')}>
                            <span className='sr-only'>Gold, sortable</span><MedalBadge medalTier='gold'/>
                        </button>
                    </th>
                    <th
                        className={`${gridHeadColumnClassNames} ${sort === 'silver' ? 'border-t-2' : ''} justify-center border-gray-300`}
                        aria-sort={sort === 'silver' ? ariaSortedValue : 'none'}
                    >
                        <button type='button' className='cursor-pointer' onClick={() => onSort?.('silver')}>
                            <span className='sr-only'>Silver, sortable</span><MedalBadge medalTier='silver'/>
                        </button>
                    </th>
                    <th
                        className={`${gridHeadColumnClassNames} ${sort === 'bronze' ? 'border-t-2' : ''} justify-center border-gray-300`}
                        aria-sort={sort === 'bronze' ? ariaSortedValue : 'none'}
                    >
                        <button type='button' className='cursor-pointer' onClick={() => onSort?.('bronze')}>
                            <span className='sr-only'>Bronze, sortable</span><MedalBadge medalTier='bronze'/>
                        </button>
                    </th>
                    <th
                        className={`${gridHeadColumnClassNames} ${sort === 'total' ? 'border-t-2' : ''} justify-center uppercase border-gray-300 text-gray-900 font-normal`}
                        aria-sort={sort === 'total' ? ariaSortedValue : 'none'}
                    >
                        <button type='button' className='cursor-pointer' onClick={() => onSort?.('total')}>
                            <span>Total</span><span className='sr-only'>Total, sortable</span>
                        </button>
                    </th>
                </tr>
                </thead>

                <tbody className={`${gridItemClassNames} min-h-[200px]`}>
                {medalRankList.map((medalRank, i) => <tr key={medalRank.code} className={gridItemClassNames}>
                    <td className={`${gridBodyColumnClassNames} pr-1 justify-end`}>{i + 1}</td>
                    <td className={`${gridBodyColumnClassNames} px-1 justify-center`}><CountryFlag
                        countryCode={medalRank.code}/></td>
                    <td className={`${gridBodyColumnClassNames} px-2 justify-start font-bold`}>{medalRank.code}</td>
                    <td className={`${gridBodyColumnClassNames} px-4 justify-center`}>{medalRank.gold}</td>
                    <td className={`${gridBodyColumnClassNames} px-4 justify-center`}>{medalRank.silver}</td>
                    <td className={`${gridBodyColumnClassNames} px-4 justify-center`}>{medalRank.bronze}</td>
                    <td className={`${gridBodyColumnClassNames} px-4 justify-center text-gray-900 font-bold`}>{medalRank.total}</td>
                </tr>)}

                </tbody>
            </table>

            <div className='absolute w-full bottom-[100px] flex items-center justify-center'>
                {isLoading && <>Loading</>}
                {error && <>{error.message}</>}
            </div>

        </div>
    );
};
