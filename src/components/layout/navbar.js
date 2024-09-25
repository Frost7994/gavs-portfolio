// components
import { Button } from "@/components/ui/button";
import ThemeButton from "../themeButton";

const Navbar = () => {
  return (
    <nav className="fixed border-b inset-x-0 top-0 w-full z-10 h-16 bg-background">
      <div className="container flex items-center justify-between w-full h-full mx-auto px-4">
        <p>Logo</p>
        {/* <Button>Click Me</Button> */}
        <ThemeButton />
      </div>
    </nav>
  );
};

export default Navbar;
