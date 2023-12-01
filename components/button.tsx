"use client";

import type { IconType } from "react-icons";

import { cn } from "@/lib/utils";

interface ButtonProps {
  label: string;
  onClick: (e: React.MouseEvent<HTMLButtonElement>) => void;
  disabled?: boolean;
  outline?: boolean;
  small?: boolean;
  icon?: IconType;
}

export const Button = ({
  label,
  onClick,
  disabled,
  icon: Icon,
  outline,
  small,
}: ButtonProps) => {
  return (
    <button
      className={cn(
        "relative disabled:opacity-70 disabled:cursor-not-allowed rounded-lg hover:opacity-80 transition w-full",
        outline
          ? "bg-white border-black text-black"
          : "bg-rose-500 border-rose-500 text-white",
        small ? "py-1 text-sm font-light border" : "py-3 font-semibold border-2"
      )}
      onClick={onClick}
      disabled={disabled}
    >
      {Icon && <Icon size={18} className="absolute left-4 top-4" />}
      {label}
    </button>
  );
};
