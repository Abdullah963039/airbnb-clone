"use client";

import { useCallback, useState } from "react";
import { AiOutlineMenu } from "react-icons/ai";

import { Avatar } from "@/components/avatar";
import { useRegisterModal } from "@/hooks/use-register-modal";

import { MenuItem } from "./menu-item";

export const UserMenu = () => {
  const onOpenRegisterModal = useRegisterModal((state) => state.onOpen);

  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = useCallback(() => {
    setIsOpen((value) => !value);
  }, []);

  return (
    <div className="relative">
      <div className="flex items-center gap-3">
        <div
          role="button"
          onClick={() => {}}
          className="hidden md:block text-sm font-semibold py-3 px-4 rounded-full hover:bg-neutral-100 transition"
        >
          Airbnb your home
        </div>
        <div
          role="button"
          onClick={toggleOpen}
          className="p-4 md:py-1 md:px-2 border border-neutral-200 flex items-center gap-3 rounded-full hover:shadow-md transition"
        >
          <AiOutlineMenu />
          <div className="hidden md:block">
            <Avatar />
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="absolute rounded-xl shadow-md w-[40vw] md:w-3/4 bg-white overflow-hidden right-0 top-12 text-sm">
          <div className="flex flex-col cursor-pointer">
            <>
              <MenuItem onClick={() => {}} label="Login" />
              <MenuItem onClick={onOpenRegisterModal} label="Sign up" />
            </>
          </div>
        </div>
      )}
    </div>
  );
};
