const Navbar = () => {
  return (
    <>
    <nav className=" text-[#1E1E1E] w-full">
      <div className="flex items-center justify-between px-6 py-4">
        <div className="flex space-x-6 mr-auto">
          <a href="#" className="hover:text-[#ECDFCC] transition duration-200">
            Logo
          </a>
        </div>
        <div className="flex space-x-6 ml-auto">
          <a href="#" className="hover:text-[#ECDFCC] transition duration-200">
            Buy Cars
          </a>
          <a href="#" className="hover:text-[#ECDFCC] transition duration-200">
            Sell Cars
          </a>
          <a href="#" className="hover:text-[#ECDFCC] transition duration-200">
            The Process
          </a>
          <a href="#" className="hover:text-[#ECDFCC] transition duration-200">
            Contact
          </a>
        </div>
      </div>
    </nav>
    </>
  );
};

export default Navbar;
