import HeroSection from "@/components/HeroSection";
import Header from "../components/Header";
import ComumComponent from "@/components/ComumComponent";

export default function Home() {
  return (
    <div>
      <Header />
      <HeroSection />
      <ComumComponent 
        comment="O problema"
        tittle="Porque investir parece tão difícil?"
        subtittle="Muita informação? Escolhas dificeis?"
        text="No fim, muitas pessoas deixam de investir não por falta de interesse, mas porque a quantidade de informações, opiniões e gráficos complexos torna a tomada de decisão confusa e cansativa."
        image={{
          src: "/box-differentials.svg",
          alt: "Diferenciais fluxo"
        }}
      />
    </div>
  );
}
