import Link from 'next/link';
import { Home, ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4">
      <div className="max-w-md w-full text-center bg-[#0b0f17] rounded-3xl p-8 sm:p-10 shadow-2xl shadow-black/50">
        <div className="text-6xl sm:text-7xl font-extrabold font-mono text-emerald-400 mb-3 tracking-tighter">
          404
        </div>
        <h1 className="text-xl sm:text-2xl font-bold text-slate-100 mb-3 tracking-tight">
          Page Not Found
        </h1>
        <p className="text-xs sm:text-sm text-slate-400 leading-relaxed mb-6">
          The page or route you are looking for doesn&apos;t exist or has been relocated in the new engineering architecture.
        </p>

        <Link
          href="/"
          className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-full bg-emerald-500 text-slate-950 font-bold text-xs hover:bg-emerald-400 transition-all shadow-md shadow-emerald-500/20 active:scale-95"
        >
          <Home className="w-4 h-4" />
          <span>Back to Homepage</span>
        </Link>
      </div>
    </div>
  );
}

