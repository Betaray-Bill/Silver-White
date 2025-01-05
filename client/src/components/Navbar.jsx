import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
    <nav className=" text-[#1E1E1E] w-full">
      <div className="flex items-center justify-between px-6 py-4">
        <div className="flex space-x-6 mr-auto">
          <Link to="/" className="hover:text-[#ECDFCC] transition duration-200">
            Logo
          </Link>
        </div>
        <div className="flex space-x-6 ml-auto">
          <Link to="/" className="hover:text-[#ECDFCC] transition font-semibold duration-200">
            Buy Cars
          </Link>
          <Link to="/sell-cars" className="hover:text-[#ECDFCC] transition font-semibold duration-200">
            Sell Cars
          </Link>
          <Link to="/" className="hover:text-[#ECDFCC] transition font-semibold duration-200">
            The Process
          </Link>
          <Link to="/" className="hover:text-[#ECDFCC] transition font-semibold duration-200">
            Contact
          </Link>
        </div>
      </div>
    </nav>
    </>
  );
};

export default Navbar;
