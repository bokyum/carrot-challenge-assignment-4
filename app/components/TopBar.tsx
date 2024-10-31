"use client";
import React from "react";

export default function TopBar() {
  const [showNav, setShowNav] = React.useState(true);
  const [lastScrollY, setLastScrollY] = React.useState(0);

  React.useEffect(() => {
    // 스크롤 기준 설정
    const scrollThreshold = 100;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      if (currentScrollY > lastScrollY && currentScrollY > scrollThreshold) {
        setShowNav(false); // 스크롤 다운 시 숨김
      } else {
        setShowNav(true); // 스크롤 업 시 표시
      }
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <div
      className={`fixed z-10 top-0 p-4 w-full bg-slate-950 text-white transition-transform duration-300 ${
        showNav ? "translate-y-0" : "-translate-y-full"
      }`}
    >
      <div className="flex items-center justify-center">
        <h6 className="text-4xl">💰 Billionaires 💰</h6>
      </div>
    </div>
  );
}
