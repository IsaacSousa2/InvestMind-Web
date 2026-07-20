import Image from "next/image";

interface ComumComponentProps {

    comment: string;
    tittle: string;
    subtittle: string;
    text: string;
    image: {
        src: string;
        alt: string;
    };

}

export default function ComumComponent({ comment, tittle, subtittle, text, image }: ComumComponentProps) {
    return(
        <div>
            <div>
                <h4 className="text-(green-t) uppercase">{comment}</h4>
                <h1 className="font-bold">{tittle}</h1>
                 <h2 className="text-(texts)">{subtittle}</h2>
                <h3>{text}</h3>
            </div>
            <div>
                <Image src={image.src} alt={image.alt} width={400} height={300} />
            </div>
        </div>
    )
}