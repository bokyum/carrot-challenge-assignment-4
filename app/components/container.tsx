export default function Container({ children }: { children: React.ReactNode }) {
  return (
    <div className="max-w-4xl m-2 2sm:m-4 p-2 2sm:p-4 bg-slate-800 ">
      {children}
    </div>
  );
}
