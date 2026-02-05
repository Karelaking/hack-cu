import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { MenuIcon } from "lucide-react";

const HeaderLayout = () => {
  return (
    <header className="flex w-full items-center justify-between px-4 py-4 sticky top-0 sm:max-w-6xl mx-auto z-10">
      <h1 className="font-bold text-xl">LOGO</h1>
      {/* Desktop Navigation Menu Items */}
      <nav>
        <ul className="hidden sm:flex space-x-8">
          <li><a href="#" className="text-gray-600 hover:text-gray-900">Home</a></li>
          <li><a href="#" className="text-gray-600 hover:text-gray-900">About</a></li>
          <li><a href="#" className="text-gray-600 hover:text-gray-900">Services</a></li>
          <li><a href="#" className="text-gray-600 hover:text-gray-900">Contact</a></li>
        </ul>
      </nav>
      <div className="sm:hidden">
        <Sheet>
          <SheetTrigger asChild>
            <Button variant="outline">
              <MenuIcon />
            </Button>
          </SheetTrigger>
          <SheetContent>
            <SheetHeader>
              <SheetTitle>LOGO</SheetTitle>
            </SheetHeader>
            {/* Mobile Navigation Menu Items */}
            <nav>
              <ul className="flex flex-col space-y-4">
                <li><a href="#" className="text-gray-600 hover:text-gray-900">Home</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900">About</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900">Services</a></li>
                <li><a href="#" className="text-gray-600 hover:text-gray-900">Contact</a></li>
              </ul>
            </nav>
          </SheetContent>
        </Sheet>
      </div>
      <Button className="hidden sm:inline-flex">Get Started</Button>
    </header>
  );
};

export default HeaderLayout;
