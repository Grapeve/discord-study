"use client";

import { Loader2 } from "lucide-react";

export default function Loading() {
  return (
    <div className="flex flex-col justify-center items-center h-full">
      <Loader2 className="w-10 h-10 animate-spin text-zinc-500 dark:text-zinc-300" />
      <span>Loading...</span>
    </div>
  );
}
