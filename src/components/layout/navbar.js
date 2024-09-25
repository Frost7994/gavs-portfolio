// components
import { Button } from "@/components/ui/button";
import ContactButton from "../contactButton";

const Navbar = () => {
  return (
    <nav className="fixed inset-x-0 top-0 w-full z-10 h-16 bg-background">
      <div className="container flex items-center justify-between w-full h-full mx-auto px-4">
        <p>Logo</p>
        <Button>click me</Button>
      </div>
    </nav>
  );
};

export default Navbar;
