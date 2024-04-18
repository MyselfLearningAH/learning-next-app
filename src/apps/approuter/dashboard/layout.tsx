import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Dashboard | Learning",
  description: "Welcome to my dashboard",
};

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <div className="p-4 h-full">
          {children}
      </div>
    </>
  );
}
