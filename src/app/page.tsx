"use client";
import { Card } from "@/components/Card";
import { EmptyList } from "@/components/EmptyList";
import { Button } from "@/components/ui/button";
import { MovieType } from "@/lib/types";
import { SignOutButton, UserButton } from "@clerk/nextjs";
import { ExitIcon, PlusCircledIcon } from "@radix-ui/react-icons";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const HomePage = () => {
  const [items, setItems] = useState<MovieType[]>([]);

  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const getInfo = async () => {
      const res = await fetch("/api/movies");
      const data = await res.json();
      setItems(data);
      setIsLoading(false);
    };

    void getInfo();
  }, []);

  const router = useRouter();

  return isLoading ? (
    <div className="border-4 my-auto border-primary rounded-full border-b-transparent animate-spin w-24 h-24" />
  ) : items.length ? (
    <div className="w-full mt-[124px] mb-[15vw] transition-none">
      <div className="w-full flex justify-between items-center">
        <div className="flex gap-3 text-xl lg:text-5xl tracking-wider font-bold items-center">
          My movies
          <PlusCircledIcon
            className="h-7 w-7 cursor-pointer hover:scale-105"
            onClick={() => {
              router.push("/new");
            }}
          />
        </div>
        <div className="flex text-lg lg:gap-5 items-center">
          <UserButton />
          <SignOutButton>
            <Button variant="ghost" className="flex text-lg gap-5 items-center">
              Logout
              <ExitIcon className="w-7 h-7" />
            </Button>
          </SignOutButton>
        </div>
      </div>
      <div className="w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 mt-[124px]">
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
