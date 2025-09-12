// components/ContactInfo.js
import { MdEmail } from "react-icons/md";
import { FaPhoneAlt } from "react-icons/fa";

export default function ContactInfo() {
  return (
    <div className="flex flex-col items-center gap-4 text-white">
      {/* Email */}
      <div className="flex items-center gap-2">
        <MdEmail className="text-xl text-white-400" />
        <span className="text-sm sm:text-base">pydev.pk@gmail.com</span>
      </div>

      {/* Mobile */}
      <div className="flex items-center gap-2">
        <FaPhoneAlt className="text-xl text-white-400" />
        <span className="text-sm sm:text-base">+91 830 243 2383</span>
      </div>
    </div>
  );
}