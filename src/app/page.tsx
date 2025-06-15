import {Suspense} from 'react';
import MedalRank from '@/app/MedalRank';

export default function Home() {
    return (
        <div className="flex items-top justify-center min-h-screen px-4 pt-24">
            <main className="flex flex-col items-center w-full max-w-[480px]">
                <Suspense>
                    <MedalRank/>
                </Suspense>
            </main>
        </div>
    );
}
