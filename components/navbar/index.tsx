"use client";

import { Container } from "@/components/container";
import { Logo } from "@/components/logo";

import { Search } from "./search";
import { UserMenu } from "./user-menu";

export const Navbar = () => {
  return (
    <div className="fixed w-full bg-white z-10 shadow-sm">
      <div className="py-4 border-b">
        <Container>
          <div className="flex items-center justify-between gap-3 md:gap-0">
            <Logo />
            <Search />
            <UserMenu />
          </div>
        </Container>
      </div>
    </div>
  );
};
