// utils
import cn from "@/lib/utils/cn";

const Navbar = () => {
  return (
    <nav className="fixed inset-x-0 top-0 w-full z-10 h-16 bg-red-500 text-white">
      <div className="container flex items-center justify-between w-full h-full mx-auto px-4">
        <p>Logo</p>
        <button>click me</button>
      </div>
    </nav>
  );
};

export default Navbar;
