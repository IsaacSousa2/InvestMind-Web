import Image from "next/image";

interface HighlightsProps {
    tittle: string;
    text: string;
    image: {
        src: string;
        alt: string;
    }
}

export default function Highlights({ tittle, text, image }: HighlightsProps){
    return(
        <div>
            <div>
                <Image
                src={image.src}
                alt={image.alt}
                width={200}
                height={200}
                className="w-full h-auto"
                />
            </div>
            <div>
                <h1>{tittle}</h1>
                <h3>{text}</h3>
            </div>
        </div>
    );
}