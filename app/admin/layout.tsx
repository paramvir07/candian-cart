import { TooltipProvider } from "@/components/ui/tooltip";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="bg-[#F3F1ED] scroll-smooth">
        <TooltipProvider>{children}</TooltipProvider>
    </div>
  );
}

