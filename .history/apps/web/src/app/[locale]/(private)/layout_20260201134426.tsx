import type { ReactNode } from "react";

export default function PrivateSectionLayout({
  children
}: {
  children: ReactNode;
  params: { locale: string };
}) {
  return (
      {children}
  );
}
