import Image from "next/image";
import Icon from "@/../public/rigth-arrow-vector.svg";

interface BlackButtonProps {
    text: string;
}

export default function BlackButton({text}: BlackButtonProps){
    return(
        <button className="flex gap-1 bg-(--back-button) px-5 py-3 rounded-2xl hover:bg-(--section) transition duration-300 ease-in-out cursor-pointer">
            <div>
                <h3>{text}</h3>
            </div>
            <div>
                <Image src={Icon} alt="Right Arrow" className="h-3 w-3"/>
            </div>
        </button>
    );  
}