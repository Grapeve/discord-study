"use client";

import ModeToggle from "@/components/mode-toggle";
import Toggle from "@/components/toggle";
import { UserButton } from "@clerk/nextjs";

export default function Home() {
  return (
    <div>
      <UserButton afterSignOutUrl="/" />
      {/* <ModeToggle /> */}
      <Toggle />
    </div>
  );
}
