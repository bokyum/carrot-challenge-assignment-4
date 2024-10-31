export default function TopBar({ showNav }: { showNav: boolean }) {
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
