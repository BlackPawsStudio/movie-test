import { MovieType } from "@/lib/types";
import Image from "next/image";

interface CardProps {
  data: MovieType;
}

export const Card = ({ data: info }: CardProps) => {
  const { title, year, img } = info;

  return (
    <div className="bg-card w-fit p-2 pb-4 rounded-xl">
      <Image
        src={img}
        className="rounded-xl"
        alt="title"
        width={500}
        height={500}
      />
      <div className="px-2 text-xl mt-4">{title}</div>
      <div className="px-2 mt-3">{year}</div>
    </div>
  );
};
