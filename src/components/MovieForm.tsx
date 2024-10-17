"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { Form, FormControl, FormField, FormItem, FormMessage } from "./ui/form";
import { Input } from "./ui/input";
import { Button } from "./ui/button";
import { useRef } from "react";
import { DownloadIcon } from "lucide-react";

const formSchema = z.object({
  title: z.string(),
  year: z.string().regex(/^\d+$/, "Only numbers allowed").min(4).max(4),
});

interface MovieFormProps {
  title: string;
  onSubmit: (values: z.infer<typeof formSchema>) => void;
}

export const MovieForm = ({ title, onSubmit }: MovieFormProps) => {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      title: "",
      year: "",
    },
  });

  const fileRef = useRef<HTMLInputElement>(null);

  return (
    <Form {...form}>
      <form
        onSubmit={form.handleSubmit(onSubmit)}
        className="w-full mt-[124px] mb-[15vw]"
      >
        <div className="flex gap-3 text-5xl tracking-wider font-bold items-center">
          {title}
        </div>
        <div className="flex gap-[127px] mt-[124px]">
          <div
            className="min-w-[473px] min-h-[504px] border-2 border-dashed rounded-xl bg-input flex flex-col items-center justify-center gap-3"
            onClick={() => fileRef.current?.click()}
          >
            <DownloadIcon />
            Drop an image here
            <Input ref={fileRef} id="picture" type="file" className="hidden" />
          </div>
          <div className="w-full">
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input placeholder="Title" className="w-96" {...field} />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="year"
              render={({ field }) => (
                <FormItem>
                  <FormControl>
                    <Input
                      placeholder="Publishing year"
                      className="w-56 mt-7"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <div className="mt-16 flex gap-4">
              <Button
                className="text-lg font-bold px-14 py-7"
                variant={"outline"}
              >
                Cancel
              </Button>
              <Button className="text-lg font-bold px-14 py-7">Submit</Button>
            </div>
          </div>
        </div>
      </form>
    </Form>
  );
};
