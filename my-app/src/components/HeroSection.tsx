import Image from "next/image";
import Grafico from "@/../public/graphics.svg";

import GreenButton from "./GreenButton";
import BlackButton from "./BlackButton";
import DestaqueHero from "./DestaqueHero";
import { Sparkles, Bot, Brain } from "lucide-react";

export default function HeroSection(){
    return(
        <div className="flex gap-4 justify-between bg-(--section) py-24 px-16">
            <div className="flex flex-col gap-16 w-1/2">
                <div className="flex flex-col gap-4">
                    <h1 className="text-7xl max-w-xl font-bold">Invista com <span className="text-(--green-t)">clareza,</span><br/>e alcance seus <span className="text-(--green-t)">objetivos. </span></h1>
                    <h3 className="text-2xl text-gray-600">A IA da investMind transforma seus objetivos financeiros <br /> em estratégias claras e personalizadas.</h3>
                </div>
                <div className="flex flex-col gap-8">
                    <div className="flex gap-4">
                        <GreenButton text="Comece agora"/>
                        <BlackButton text="Saiba mais"/>
                    </div>
                    <div className="flex gap-4 w-full">
                        <DestaqueHero icon={Sparkles} tittleDestaque="Inteligência artificial" textDestaque="Uma IA avançada que analisa seus dados." />
                        <DestaqueHero icon={Bot} tittleDestaque="Investimento automatizado" textDestaque="Automatize suas decisões de investimento." />
                        <DestaqueHero icon={Brain} tittleDestaque="Análise de risco" textDestaque="Identifique e gerencie todos os seus riscos." />
                    </div>
                </div>
            </div>
            <div className="w-1/2 flex justify-center items-center">
                <Image src={Grafico} alt="Grafico" className="w-[80%] h-auto"/>
            </div>
        </div>
    );
}