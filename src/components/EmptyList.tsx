import { Button } from "./ui/button";

export const EmptyList = () => (
  <div className="flex flex-col h-screen items-center justify-center gap-10">
    <h2 className="text-6xl">Your movie list is empty</h2>
    <Button className="text-xl p-6">Add a new movie</Button>
  </div>
);