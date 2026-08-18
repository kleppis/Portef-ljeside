import { ReactNode } from "react";
import { Nav } from "./nav";
import { Footer } from "./footer";

interface LayoutProps {
  children: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  return (
    <div className="flex min-h-screen flex-col bg-background text-text">
      <Nav />
      <main className="flex-1">{children}</main>
      <Footer />
    </div>
  );
};
