import Container from "@/app/components/container";
import { UserIcon } from "@heroicons/react/24/solid";
import Image from "next/image";
import { notFound } from "next/navigation";

type Params = Promise<{ id: string }>;

const getPersonDetailById = async (id: string) => {
  if (!id) return notFound();

  const response = await fetch(
    `https://billions-api.nomadcoders.workers.dev/person/${id}`
  );

  if (response.status === 200) return response.json();
  else return notFound();
};

export const generateMetadata = async ({ params }: { params: Params }) => {
  const { id } = await params;
  const person = await getPersonDetailById(id);

  return {
    title: person.name,
  };
};

export default async function PersonDetail({ params }: { params: Params }) {
  const { id } = await params;
  if (!id) return notFound();
  const person = await getPersonDetailById(id);

  if (!person) return notFound();

  return (
    <div className="min-w-screen min-h-screen flex items-center justify-center text-slate-200 ">
      <div>
        <div className="flex flex-col gap-2">
          <Container>
            <div className="2sm:flex 2sm:flex-row gap-4">
              <div className=" w-100 2sm:w-60">
                <div className="relative aspect-square">
                  {person.squareImage &&
                  !person.squareImage.includes("undefined") ? (
                    <Image fill src={person.squareImage} alt={person.name} />
                  ) : (
                    <UserIcon className="w-full" />
                  )}
                </div>
              </div>
              <div className="mt-4 2sm:mt-0  flex flex-col gap-2">
                <div className="text-2xl font-bold text-white">
                  {person.name ?? "UNKOWN"}
                </div>
                <div>{`Network: ${
                  person.netWorth
                    ? Math.round(person.netWorth / 1000)
                    : "UNKOWN"
                } Billion`}</div>
                <div>{`Country: ${person.country ?? "UNKOWN"}`}</div>
                <div>{`Industry: ${
                  person.industries ? person.industries?.join(", ") : "UNKOWN"
                }`}</div>
              </div>
            </div>

            <div className="h-[1px] my-2 bg-white" />

            <div>
              {person.bio?.map((b: string, idx: number) => (
                <p className="mb-1" key={idx}>
                  {b}
                </p>
              ))}
            </div>
          </Container>

          <Container>
            <div className="my-4 mb-8">
              <h1 className="text-2xl text-white ">Financial Assets</h1>
              <div className="mt-4 grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-2">
                {/* @ts-expect-error interface 정의 필요  */}
                {person.financialAssets?.map((asset, idx: number) => (
                  <div
                    key={idx}
                    className="border-2 border-slate-500  rounded-md p-2"
                  >
                    <p>{`Ticker: ${asset.ticker}`}</p>
                    <p>{`Shares: ${asset.numberOfShares}`}</p>
                    {asset.exerciseOptionPrice && (
                      <p>{`Exercise Prise: ${asset.exerciseOptionPrice}`}</p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </Container>
        </div>
      </div>
    </div>
  );
}
