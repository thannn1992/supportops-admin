import type { ReactNode } from "react";

export default function PrivateSectionLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: { locale: string };
}) {
  return (
      {children}
  );
}
