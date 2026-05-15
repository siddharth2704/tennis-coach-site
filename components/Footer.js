export default function Footer() {
  return (
    <footer className="bg-black text-zinc-500 py-12 border-t border-zinc-900 mt-auto">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="text-center md:text-left">
          <span className="font-display font-bold text-2xl text-white tracking-[0.2em] uppercase">
            Deepshikha Saw<span className="text-[#ccff00]">.</span>
          </span>
          <p className="mt-2 text-sm font-light">Elite tennis coaching by a former professional player.</p>
        </div>
        <div className="text-sm font-mono tracking-widest uppercase">
          &copy; {new Date().getFullYear()} Deepshikha. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
