import { PhotoIcon } from "@heroicons/react/24/solid";

const SkeletonCard = () => {
  return (
    <div className="@apply max-w-60  animate-pulse bg-slate-800 border-2 border-slate-800 ">
      <PhotoIcon className="w-full" />
      <div className="px-2">
        <p className="h-2 bg-slate-200 rounded"></p>
        <p className="h-2 mt-2 bg-slate-200 rounded w-[80%]"></p>
        <p className="h-2 mt-2 bg-slate-200 rounded w-[40%]"></p>
        <p className="h-2 mt-2 bg-slate-200 rounded"></p>
        <p className="h-2 mt-2 bg-slate-200 rounded w-[80%]"></p>
      </div>
    </div>
  );
};

export default function Loading() {
  const cardCount = 20; // 필요한 카드 개수 설정

  return (
    <div className="pt-12 ">
      <div className="flex items-center justify-center m-10 ">
        <div className="grid grid-cols-4 gap-4">
          {Array.from({ length: cardCount }).map((_, idx) => (
            <SkeletonCard key={idx} />
          ))}
        </div>
      </div>
    </div>
  );
}
