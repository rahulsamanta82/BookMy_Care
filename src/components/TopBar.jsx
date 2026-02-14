import { IoMdPaperPlane } from "react-icons/io";
import { BsClock, BsTelephoneFill } from "react-icons/bs";

import SocialIcons from "./SocialIcons";

const TopBar = () => {
  return (
    <div className="hidden lg:block bg-[#f4f9fd] py-2.5">
      <div className="container flex justify-between">
        <ul className="flex space-x-25px">
          <li className="flex group space-x-2 items-center">
            <span className="w-25px h-25px rounded-full group-hover:bg-primary transition-300 flex justify-center items-center text-xs bg-[#def5ee] text-primary group-hover:text-white">
              <BsClock />
            </span>
            <span className="text-secondary text-sm">
              Mon - Sat 9:00 AM - 8:00 PM
            </span>
          </li>

          <li className="flex group space-x-2 items-center">
            <span className="w-25px h-25px rounded-full group-hover:bg-primary transition-300 flex justify-center items-center text-xs bg-[#def5ee] text-primary group-hover:text-white">
              <BsTelephoneFill />
            </span>
            <span className="text-secondary text-sm">
              Call Us:{" "}
              <a
                href="tel:+919876543210"
                className="hover:text-primary transition-300"
              >
                +91 98765 43210
              </a>
            </span>
          </li>

          <li className="flex group space-x-2 items-center">
            <span className="w-25px h-25px rounded-full group-hover:bg-primary transition-300 flex justify-center items-center text-sm bg-[#def5ee] text-primary group-hover:text-white">
              <IoMdPaperPlane />
            </span>
            <a
              href="mailto:support@bookmycare.in"
              className="text-secondary text-sm hover:text-primary transition-300"
            >
              support@bookmycare.in
            </a>
          </li>
        </ul>

        <SocialIcons className="!mt-0" />
      </div>
    </div>
  );
};

export default TopBar;
