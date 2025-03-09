import { SidebarTrigger } from "~/components/ui/sidebar";

import SignInHeader from "~/components/navbar/SigninHeader";
import { ModeToggle } from "~/components/themes/theme-toggle";
import { Input } from "~/components/ui/input";
import { Separator } from "~/components/ui/separator";
import { SidebarProvider } from "~/components/ui/sidebar";
import AppSidebar from "~/components/navbar/app-sidebar";
import { cookies } from "next/headers";

const ChatLayout = async ({ children }: { children: React.ReactNode }) => {
  const cookieStore = await cookies();
  const defaultOpen = cookieStore.get("sidebar_state")?.value === "true";
  return (
    <SidebarProvider defaultOpen={defaultOpen}>
      <AppSidebar />
      <main className="w-full">
        <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
          <SidebarTrigger />
          <Separator orientation="vertical" className="mr-2 h-4" />
          <Input type="search" placeholder="Buscar..." />
          <ModeToggle />
          <SignInHeader />
        </header>
        {children}
      </main>
    </SidebarProvider>
  );
};
export default ChatLayout;
