import Image from "next/image";
import ProfileImage from "../../../public/pradeep-black.png";
import SocialLinks from "./SocialLinks";
import Button from "./Button";

export default function Header() {
    return (
        <header 
            className="max-w-4xl mx-auto text-center h-[80vh] lg:h-[90vh] flex flex-col items-center justify-end border-left-main border-right-main relative bg-cover bg-center bg-no-repeat"
            style={{
                backgroundImage: `url(${ProfileImage.src})`,
            }}
        >
            {/* Corner borders */}
            <span className="right-top w-2 h-2 block"></span>
            <span className="right-bottom w-2 h-2 block"></span>
            <span className="left-top w-2 h-2 block"></span>
            <span className="left-bottom w-2 h-2 block"></span>

            <div>
                {/* Image Box */}
                {/* <div className="relative inline-block m-auto">
                    <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg blur opacity-75 animate-pulse transition duration-1000"></div>

                    <img
                        src={ProfileImage.src}
                        alt="Profile"
                        className="relative block rounded-lg bg-gray-900 w-80 h-80 sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-100 lg:h-100"
                    />
                </div> */}

                <h1 className="text-4xl lg:text-5xl font-bold mt-5">Pradeep Kumar Yadav</h1>
                <p className="text-sm lg:text-lg mt-4">Sr Full Stack Engineer | AI Engineer | Backend Specialist</p>

                <div className="mt-10">
                    <SocialLinks />
                </div>

                <div className="mt-10 flex gap-4 justify-center mb-1 lg:mb-10">
                    <Button text={'Contact Me'} area={"contact"} />
                    <Button text={'View my Works'} area={"projects"} />
                </div>
            </div>
        </header>
    );
}
