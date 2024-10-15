"use client";

import { Button } from "@/components/ui/button";

const HomePage = () => {
  return (
    <div className="flex flex-col h-full items-center justify-center gap-10">
      <h2 className="text-6xl">Your movie list is empty</h2>
      <Button className="text-xl p-6">Add a new movie</Button>
    </div>
  );
};

export default HomePage;
