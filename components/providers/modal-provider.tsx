"use client";

import { RegisterModal } from "@/components/modals/register-modal";

import { ClientProvider } from "./client-provider";

export const ModalProvider = () => {
  return (
    <ClientProvider>
      <RegisterModal />
    </ClientProvider>
  );
};
