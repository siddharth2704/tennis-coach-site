export default function Footer() {
  return (
    <footer className="bg-black text-zinc-400 py-8 border-t border-zinc-800 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <span className="font-bold text-xl text-white tracking-tighter">
            PRO<span className="text-[#ccff00]">TENNIS</span>
          </span>
          <p className="mt-2 text-sm">Professional tennis coaching for all levels.</p>
        </div>
        <div className="text-sm">
          &copy; {new Date().getFullYear()} ProTennis Coaching. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
