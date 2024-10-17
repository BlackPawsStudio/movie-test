"use client";
import { MovieType } from "@/lib/types";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface CardProps {
  data: MovieType;
}

export const Card = ({ data: info }: CardProps) => {
  const { title, year, img, id } = info;

  const router = useRouter();

  return (
    <div
      className="bg-card w-fit p-2 pb-4 flex flex-col justify-between rounded-xl cursor-pointer hover:scale-105 active:scale-95"
      onClick={() => router.push(`/edit/${id}`)}
    >
      <Image
        src={img}
        className="rounded-xl"
        alt="title"
        width={500}
        height={500}
      />
      <div>
        <div className="px-2 text-xl mt-4">{title}</div>
        <div className="px-2 text-sm text-secondary mt-3">{year}</div>
      </div>
    </div>
  );
};
