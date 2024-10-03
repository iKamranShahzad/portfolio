const Header = () => {
  return (
    <header className="flex w-full items-center justify-between rounded-ee-3xl bg-neutral-900 bg-opacity-50 p-6">
      <button className="rounded-md bg-gradient-to-r from-slate-700 to-purple-900 px-4 py-2 text-sm font-medium text-white shadow-md transition-transform duration-300 ease-in-out hover:scale-105 hover:bg-gradient-to-r hover:from-slate-600 hover:to-purple-800 hover:shadow-lg">
        Hire Me
      </button>

      <nav className="space-x-4">
        <a href="#about" className="text-gray-300 hover:text-white">
          About
        </a>
        <a href="#projects" className="text-gray-300 hover:text-white">
          Projects
        </a>
      </nav>
    </header>
  );
};

export default Header;
