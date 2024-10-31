import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
export const API_URL = "https://billions-api.nomadcoders.workers.dev";

export const getBillion = (num: number) => {
  "use client";
  return Math.round(num / 1000);
};

const getBillionaries = async () => {
  await new Promise((resolve) => setTimeout(resolve, 1000));
  const response = await fetch(API_URL);

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
        <div className="grid grid-cols-4 gap-4">
          {billionaries.map((billionare: any) => (
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
                    <div>hi</div>
                  )}
                </div>
                <div className="p-2">
                  <p className="text-lg font-semibold">{billionare.name}</p>
                  <p className="text-sm pt-1">{`${getBillion(
                    billionare.netWorth
                  )} Billion / ${billionare.industries.join(" & ")}`}</p>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
