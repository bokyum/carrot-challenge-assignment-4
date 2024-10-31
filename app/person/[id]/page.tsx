import { API_URL } from "@/app/(home)/page";
import Image from "next/image";
import { notFound } from "next/navigation";

const getPersonDetailById = async (id: string) => {
  console.log(id);
  if (!id) return notFound();

  const response = await fetch(`${API_URL}/person/${id}`);
  console.log(response);

  if (response.status === 200) return response.json();
};

export default async function PersonDetail({
  params,
}: {
  params: { id: string };
}) {
  const { id } = await params;
  const person = await getPersonDetailById(id);

  if (!person) return notFound();

  return (
    <div className="w-100 h-100">
      <div className="w-[500px] h-[500px]">
        <div className="relative aspect-square">
          <Image
            src={person.squareImage}
            fill
            alt={person.name}
            className="object-cover"
          />
        </div>
      </div>
      <div>
        {/* <div>{getBillion(person.netWorth)}</div>
        <div>{person.country}</div>
        <div>{person.industries?.join(",")}</div> */}
      </div>

      <div>
        {person.bio.map((b: string, idx: number) => (
          <span key={idx}>{b}</span>
        ))}
      </div>
    </div>
  );
}
