import { Metadata } from "next";
import TopBar from "../components/TopBar";

export const metadata: Metadata = {
  title: "Home",
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div>
      <TopBar />
      {children}
    </div>
  );
}
