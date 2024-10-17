"use client";

import { Card } from "@/components/Card";
import { EmptyList } from "@/components/EmptyList";
import { Button } from "@/components/ui/button";
import { MovieType } from "@/lib/types";
import { ExitIcon, PlusCircledIcon } from "@radix-ui/react-icons";

const HomePage = () => {
  const items: MovieType[] = new Array(12).fill(null).map(() => ({
    title: "test",
    year: 2024,
    img: "https://res.cloudinary.com/dxyapxi2t/image/upload/v1715092419/Untitled_qv9by4.png",
  }));

  return items.length ? (
    <div className="w-full mt-[124px] mb-[15vw]">
      <div className="w-full flex justify-between items-center">
        <div className="flex gap-3 text-5xl tracking-wider font-bold items-center">
          My movies
          <PlusCircledIcon className="h-7 w-7" />
        </div>
        <div className="flex text-lg gap-5 items-center">
          Logout
          <ExitIcon className="w-7 h-7" />
        </div>
      </div>
      <div className="w-full grid grid-cols-4 gap-6 mt-[124px]">
        {items.map((el, idx) => (
          <Card key={idx} data={el} />
        ))}
      </div>
      <div className="flex items-center gap-4 mx-auto w-fit mt-[120px] font-bold">
        Prev
        <div className="flex items-center gap-2">
          <Button className="font-bold w-8 h-8">1</Button>
          <Button className="font-bold w-8 h-8" disabled>
            2
          </Button>
        </div>
        Next
      </div>
    </div>
  ) : (
    <EmptyList />
  );
};

export default HomePage;
