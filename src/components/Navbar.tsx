import ThemeToggle from "./ThemeToggle";

export default function Navbar() {
  return (
    <nav className="fixed top-0 w-full z-50 bg-slate-900/80 backdrop-blur border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <span className="font-poppins font-semibold text-lg">
          Osuald<span className="text-sky-400">.</span>
        </span>

        <div className="hidden md:flex gap-6 text-sm text-slate-300">
          <a href="#about" className="hover:text-sky-400">
            About
          </a>
          <a href="#skills" className="hover:text-sky-400">
            Skills
          </a>
          <a href="#projects" className="hover:text-sky-400">
            Projects
          </a>
          <a href="#experience" className="hover:text-sky-400">
            Experience
          </a>
          <a href="#contact" className="hover:text-sky-400">
            Contact
          </a>
        </div>

        <div className="flex items-center gap-4">
          <a
            href="#contact"
            className="px-4 py-2 rounded-lg bg-sky-400 text-slate-900 font-medium text-sm hover:bg-sky-300 transition"
          >
            Hire Me
          </a>
          <ThemeToggle />
        </div>
      </div>
    </nav>
  );
}
