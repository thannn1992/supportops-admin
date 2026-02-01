import type { ReactNode } from "react";
import { PrivateShell } from "../../../components/layout";
import { privateNavItems } from "../../../lib/navigation";

export default function PrivateSectionLayout({
  children,
  params,
}: {
  children: ReactNode;
  params: { locale: string };
}) {
  return (
    <PrivateShell navItems={privateNavItems} locale={params.locale}>
      {children}
    </PrivateShell>
  );
}
