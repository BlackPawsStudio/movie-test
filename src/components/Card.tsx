"use client";
import { MovieType } from "@/lib/types";
import Image from "next/image";
import { useRouter } from "next/navigation";

interface CardProps {
  data: MovieType;
}

export const Card = ({ data: info }: CardProps) => {
  const { title, year, img } = info;

  const router = useRouter();

  return (
    <div
      className="bg-card w-fit p-2 pb-4 rounded-xl cursor-pointer hover:scale-105 active:scale-95"
      onClick={() => router.push("/edit/0")}
    >
      <Image
        src={img}
        className="rounded-xl"
        alt="title"
        width={500}
        height={500}
      />
      <div className="px-2 text-xl mt-4">{title}</div>
      <div className="px-2 text-sm text-secondary mt-3">{year}</div>
    </div>
  );
};
