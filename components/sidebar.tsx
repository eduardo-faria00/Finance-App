"use client";

import { Home } from "lucide-react";
import CustomLink from "./ui/custom-link";

export default function Sidebar() {
  return (
    <aside className="w-1/5 flex flex-col p-3 bg-primary text-primary-foreground gap-3">
      <CustomLink href="/">
        <Home /> Dashboard
      </CustomLink>
      <CustomLink href="/chart">Teste</CustomLink>
    </aside>
  );
}
