import Image from "next/image";
import ProfileImage from "../../../public/profile.jpeg"
import SocialLinks from "./SocialLinks";
import Button from "./Button";

export default function Header() {
    return (
        <header className="max-w-4xl mx-auto text-center h-screen flex items-center justify-center border-left-main border-right-main relative">
            <span className="right-top w-2 h-2 block"></span>
            <span className="right-bottom w-2 h-2 block"></span>
            <span className="left-top w-2 h-2 block"></span>
            <span className="left-bottom w-2 h-2 block"></span>
            <div>
                <img
                    src={ProfileImage.src}
                    alt="Profile"
                    className="rounded m-auto sm:w-32 sm:h-32 md:w-40 md:h-40 lg:w-100 lg:h-100 border-4 border-gray-500"
                />
                <h1 className="text-5xl font-bold mt-5">Pradeep Kumar Yadav</h1>
                <p className="text-lg mt-4">Sr Full Stack Engineer | AI Engineer | Backend Specialist</p>
                <div className="mt-10">
                    <SocialLinks />
                </div>
                <div className="mt-10 flex gap-4 justify-center">
                    <Button text={'Contact Me'} />
                    <Button text={'View my Works'} />
                </div>
            </div>
        </header>
    );
}