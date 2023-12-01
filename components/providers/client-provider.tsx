"use client";

import * as React from "react";

interface ClientProviderProps {
  children: React.ReactNode;
}

export const ClientProvider = ({ children }: ClientProviderProps) => {
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);
  }, []);

  return mounted ? children : null;
};
