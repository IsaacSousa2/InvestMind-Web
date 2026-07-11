import Image from "next/image";
import GreenButton from "./GreenButton";
import BlackButton from "./BlackButton";

import Logo from "@/../public/white-logo.svg";

export default function Header(){

    return(
        <div className="flex items-center text-center content-center bg-(--background) h-16 w-full">
            <div>
                <Image src={Logo} alt="Logo" className="h-50 w-50"/>
            </div>
            <div>
                
            </div>
            <div>
                <BlackButton text="Login"/>
                
            </div>
        </div>
    );

}