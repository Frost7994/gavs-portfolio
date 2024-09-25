const Navbar = () => {
  return (
    <nav className="fixed inset-x-0 top-0 w-full z-10 bg-red-300 h-16">
      <div className="container flex items-center justify-between w-full h-full mx-auto px-4">
        <p>Logo</p>
        <button>click me</button>
      </div>
    </nav>
  );
};

export default Navbar;
