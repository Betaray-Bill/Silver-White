import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <>
    {/* <nav className=" text-[#1E1E1E] w-full">
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
    </nav> */}
    <nav className="flex justify-around items-center py-4 px-8 w-[50rem]">
  <div className="text-xl font-bold">RentRide</div>
  <ul className="flex gap-4 bg-gray-200 rounded-xl text-black">
    <li className="hover:bg-gray-300 hover:rounded-xl cursor-pointer p-4 transition-all duration-300 ease-in-out">
      Home
    </li>
    <li className="hover:bg-gray-300 hover:rounded-xl cursor-pointer p-4 transition-all duration-300 ease-in-out">
      Service
    </li>
    <li className="hover:bg-gray-300 hover:rounded-xl cursor-pointer p-4 transition-all duration-300 ease-in-out">
      How it works
    </li>
  </ul>
</nav>

    </>
  );
};

export default Navbar;
