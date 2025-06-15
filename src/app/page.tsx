import MedalRankList from '@/components/MedalRankList/MedalRankList';

export default function Home() {
  return (
      <div className="flex items-top justify-center min-h-screen px-4 pt-24">
        <main className="flex flex-col items-center w-full max-w-[480px]">
            <MedalRankList />
        </main>
      </div>
  );
}
