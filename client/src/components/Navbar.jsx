import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"


const Navbar = () => {
  return (
    <nav className="bg-gray-800 text-white w-full">
      <div className="flex items-center justify-between px-6 py-4">
        <div className="text-2xl font-bold">
          <a href="#" className="hover:text-gray-400">
            Silver White
          </a>
        </div>
        <div className="flex space-x-6">
          <a href="#" className="hover:text-gray-400 transition duration-200">
            Home
          </a>
          <a href="#" className="hover:text-gray-400 transition duration-200">
            About
          </a>
          <a href="#" className="hover:text-gray-400 transition duration-200">
            Contact
          </a>
          <DropdownMenu className="hover:text-gray-400 transition duration-200">
            <DropdownMenuTrigger>Services</DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuItem>Buy Used Cars</DropdownMenuItem>
              <DropdownMenuItem>Sell Used Cars</DropdownMenuItem>
              <DropdownMenuItem>Rent a Car</DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
