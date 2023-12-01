import type { Metadata } from "next";
import { Nunito } from "next/font/google";

import { Navbar } from "@/components/navbar";
import { ClientProvider } from "@/components/providers/client-provider";
import { ModalProvider } from "@/components/providers/modal-provider";
import { ToasterProvider } from "@/components/providers/toaster-provider";
import "@/styles/globals.css";

const font = Nunito({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Airbnb",
  description: "Airbnb clone",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <ClientProvider>
          <ModalProvider />
          <ToasterProvider />
          <Navbar />
        </ClientProvider>
        {children}
      </body>
    </html>
  );
}
