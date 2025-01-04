const Navbar = () => {
  return (
    <>
    <nav className="bg-[#914F1E] text-[#FCFAEE] w-full">
      <div className="flex items-center justify-between px-6 py-4">
        {/* Add a placeholder for a logo or other content here if needed */}
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
    <nav className="bg-[#FCFAEE] text-[#1E1E1E] w-full">
      <div className="flex items-center justify-between px-6 py-4">
        <div className="flex space-x-6 mr-auto">
          <a href="#" className="hover:text-[#ECDFCC] transition duration-200">
            Logo
          </a>
        </div>
        <div className="flex space-x-6 ml-auto">
          <a href="#" className="hover:text-[#ECDFCC] transition duration-200">
            Tagline
          </a>
        </div>
      </div>
    </nav>
    </>
  );
};

export default Navbar;
