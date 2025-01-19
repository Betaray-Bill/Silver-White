import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
      <nav className="flex justify-between items-center p-4">
        <div className="text-2xl font-bold">SilverWhite</div>
        <div className="flex rounded-xl text-black">
          <Link to="/" className="hover:bg-gray-300 hover:rounded-xl cursor-pointer p-4 transition-all duration-300 ease-in-out">
            Buy Cars
          </Link>
          <Link to="/sell-cars" className="hover:bg-gray-300 hover:rounded-xl cursor-pointer p-4 transition-all duration-300 ease-in-out">
            Sell Cars
          </Link>
          <Link to="/" className="hover:bg-gray-300 hover:rounded-xl cursor-pointer p-4 transition-all duration-300 ease-in-out">
            The Process
          </Link>
          <Link to="/" className="hover:bg-gray-300 hover:rounded-xl cursor-pointer p-4 transition-all duration-300 ease-in-out">
            Contact
          </Link>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
