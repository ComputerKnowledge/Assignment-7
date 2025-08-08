import { useState } from "react";
import { FaBars } from "react-icons/fa";
import PropTypes from "prop-types";

const Navbar = ({ money }) => {
  const [isClick, setIsClick] = useState(false);

  const toggleMenu = () => {
    setIsClick(!isClick);
  };

  return (
    <nav>
      <div className="max-w-7xl mx-auto">
        <div className="flex justify-between items-center">
          <div className="">
            <img src="/logo.png" alt="Logo" className="w-auto" />
          </div>

          <div className="flex items-center justify-center gap-4">
            <div className="sm:hidden flex gap-2 border-2 border-black py-1 px-3 rounded-md">
              <p>{money} coin</p>
              <img src="/coin.png" alt="" className="w-6" />
            </div>
            <div className="sm:hidden">
              <button onClick={toggleMenu} className="text-gray-800 pt-2">
                <FaBars></FaBars>
              </button>
            </div>
          </div>

          <div className="hidden items-center sm:flex  gap-6">
            <div className="hidden sm:flex space-x-6">
              <a
                href="#"
                className="text-gray-800 md:px-1 lg:px-2 py-2 rounded-md font-medium"
              >
                Home
              </a>
              <a
                href="#"
                className="text-gray-800 md:px-1 lg:px-2 py-2 rounded-md font-medium"
              >
                About
              </a>
              <a
                href="#"
                className="text-gray-800 md:px-1 lg:px-2 py-2 rounded-md font-medium"
              >
                Services
              </a>
              <a
                href="#"
                className="text-gray-800 md:px-1 lg:px-2 py-2 rounded-md font-medium"
              >
                Contact
              </a>
            </div>
            <div className="hidden sm:flex gap-2 border-2 border-black py-1 px-3 rounded-md">
              <p>{money} coin</p>
              <img src="/coin.png" alt="" className="w-6" />
            </div>
          </div>
        </div>

        {isClick ? (
          <div className="sm:hidden text-right">
            <a
              href="#"
              className="block w-28 ml-auto bg-gray-200  text-right px-4 py-2 text-gray-800 hover:bg-gray-100"
            >
              Home
            </a>
            <a
              href="#"
              className="block w-28 ml-auto bg-gray-200  text-right px-4 py-2 text-gray-800 hover:bg-gray-100"
            >
              About
            </a>
            <a
              href="#"
              className="block w-28 ml-auto bg-gray-200  text-right px-4 py-2 text-gray-800 hover:bg-gray-100"
            >
              Services
            </a>
            <a
              href="#"
              className="block w-28 ml-auto bg-gray-200  text-right px-4 py-2 text-gray-800 hover:bg-gray-100"
            >
              Contact
            </a>
          </div>
        ) : (
          <div className="hidden text-right">
            <a
              href="#"
              className="block w-28 ml-auto bg-gray-200  text-right px-4 py-2 text-gray-800 hover:bg-gray-100"
            >
              Home
            </a>
            <a
              href="#"
              className="block w-28 ml-auto bg-gray-200  text-right px-4 py-2 text-gray-800 hover:bg-gray-100"
            >
              About
            </a>
            <a
              href="#"
              className="block w-28 ml-auto bg-gray-200  text-right px-4 py-2 text-gray-800 hover:bg-gray-100"
            >
              Services
            </a>
            <a
              href="#"
              className="block w-28 ml-auto bg-gray-200  text-right px-4 py-2 text-gray-800 hover:bg-gray-100"
            >
              Contact
            </a>
          </div>
        )}
      </div>
    </nav>
  );
};

Navbar.propTypes = {
  money: PropTypes.number,
};

export default Navbar;
