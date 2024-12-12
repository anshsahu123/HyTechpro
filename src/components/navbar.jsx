import logo from "../assets/images/Salesforce-Logo.png";
import certificate from "../assets/images/Certification-Badge-APR-2024-202.png";
import review from "../assets/images/CIO-Review.png";
import logo2 from "../assets/images/Logo2.pngcopy2.png";

const Navbar = () => {
  return (
    <nav className="text-white bg-white fixed top-0 w-screen shadow-md z-10 ">
      <div className="px-4 items-center h-16 flex max-w-none">
        {/* Navigation Links */}
        <ul className="flex gap-10 justify-center items-center w-full">
          <div className="flex items-center">
            <li>
              <img className="mix-blend-multiply h-[50px]" src={logo2} alt="" />
            </li>
            <p className="text-black opacity-70 text-[25px] ml-2">HyTechPro</p>
            <li>
              <img
                className="border-l-[1px] pl-3 border-black ml-5"
                src={logo}
                alt=""
              />
            </li>
          </div>
          <li>
            <a href="#" className="hover:text-gray-300 text-black">
              About Us
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-gray-300 text-black">
              Technology Stack
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-gray-300 text-black">
              Services
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-gray-300 text-black">
              Blog
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-gray-300 text-black">
              Contact Us
            </a>
          </li>
          <li>
            <img
              className="bg-transparent h-[50px] w-[30px]"
              src={certificate}
              alt=""
            />
          </li>
          <li>
            <img
              className="bg-transparent h-[60px] w-[60px]"
              src={review}
              alt=""
            />
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
