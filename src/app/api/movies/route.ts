import { NextRequest, NextResponse } from "next/server";
import { data } from "./data";
import { MovieType } from "@/lib/types";

export const GET = async () => {
  return NextResponse.json(data);
};

export const POST = async (req: NextRequest) => {
  const { title, year, img } = (await req.json()) as MovieType;
  data.push({ title, year, img, id: Math.max(...data.map((el) => el.id)) });
  return NextResponse.json(data);
};

export const PUT = async (req: NextRequest) => {
  const { id, title, img, year } = (await req.json()) as MovieType;
  const itemIndex = data.findIndex((el) => el.id === id);
  data[itemIndex] = { title, img, year, id };
  return NextResponse.json(data);
};
