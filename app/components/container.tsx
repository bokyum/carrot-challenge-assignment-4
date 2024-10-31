export default function Container({ children }: { children: React.ReactNode }) {
  return <div className="max-w-4xl m-4 p-4 bg-slate-800 ">{children}</div>;
}
