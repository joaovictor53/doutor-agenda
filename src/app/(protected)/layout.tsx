import { NuqsAdapter } from "nuqs/adapters/next/app";

import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar";

import { AppSidebar } from "./_components/app-sidebar";

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <SidebarProvider>
      <AppSidebar />
      <main className="w-full">
        <SidebarTrigger />
        <NuqsAdapter>{children}</NuqsAdapter>
      </main>
    </SidebarProvider>
  );
}
