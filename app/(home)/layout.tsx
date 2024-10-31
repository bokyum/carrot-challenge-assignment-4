import TopBar from "../components/TopBar";
import React from "react";

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
