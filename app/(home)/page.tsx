import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { UserIcon } from "@heroicons/react/24/solid";

const getBillionaries = async () => {
  const response = await fetch("https://billions-api.nomadcoders.workers.dev");

  if (response.status === 200) {
    return response.json();
  } else {
    notFound();
  }
};

export default async function Home() {
  const billionaries = await getBillionaries();
  return (
    <div className="pt-12">
      <div className="flex items-center justify-center m-10">
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4">
          {/* @ts-expect-error interface 정의 필요 */}
          {billionaries.map((billionare) => (
            <Link key={billionare.id} href={`/person/${billionare.id}`}>
              <div
                className="@apply max-w-60 h-full  bg-slate-800 border-2 border-slate-800 hover:transition hover:scale-105 hover:cursor-pointer hover:border-slate-500"
                key={billionare.id}
              >
                <div className="relative aspect-square">
                  {billionare.squareImage &&
                  !billionare.squareImage.includes("undefined") ? (
                    <Image
                      fill
                      src={billionare.squareImage}
                      alt={billionare.name}
                    />
                  ) : (
                    <UserIcon className="w-full" />
                  )}
                </div>
                <div className="p-2 text-slate-200">
                  <p className="text-lg font-semibold">{billionare.name}</p>
                  <p className="text-sm pt-1">{`${
                    Math.round(billionare.netWorth) / 1000
                  } Billion / ${billionare.industries.join(" & ")}`}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
