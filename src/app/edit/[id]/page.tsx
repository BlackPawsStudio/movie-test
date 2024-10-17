"use client";
import { MovieForm } from "@/components/MovieForm";
import { MovieType } from "@/lib/types";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const NewMoviePage = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [data, setData] = useState<MovieType | null>(null);

  const pathname = usePathname();
  const id = pathname.split("/").pop();

  useEffect(() => {
    const getInfo = async () => {
      const res = await fetch("/api/movies");
      const data = await res.json();
      const item = data.find((el: MovieType) => el.id === parseInt(id ?? "0"));
      setData(item);
      setIsLoading(false);
    };

    void getInfo();
  }, [id]);

  return isLoading || !data ? (
    <div className="border-4 my-auto border-primary rounded-full border-b-transparent animate-spin w-24 h-24" />
  ) : (
    <MovieForm title="Edit" onSubmit={() => {}} defaultValues={data} />
  );
};

export default NewMoviePage;
