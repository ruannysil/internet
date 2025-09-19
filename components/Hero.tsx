import { Button } from "@/components/ui/button";
import Image from "next/image";
interface HeroProps {
  onScrollToPlans: () => void;
}

const Hero = ({ onScrollToPlans }: HeroProps) => {
  const handleHireNow = () => {
    const whatsappNumber = "559881082203";
    const whatsappMessage = `
Olá! Francisca Sousa 
Gostaria de contratar agora um plano da Claro e preciso de mais informações.
Pode me ajudar?
`.trim();


    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(whatsappUrl, "_blank");
  };
  return (
    <section className="relative h-full py-24 flex items-center justify-center bg-gradient-to-b bg-red-700 overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-black/20"></div>
      <div className="absolute top-20 left-10 w-72 h-72 bg-white/10 rounded-full blur-3xl"></div>
      <div className="absolute bottom-20 right-10 w-96 h-96 bg-white/5 rounded-full blur-3xl"></div>

      {/* Content */}
      <div className="relative z-10 text-center text-white px-4 max-w-5xl mx-auto">
        <div className="flex flex-col items-center mb-5">
          <Image src="/logo.png" alt="logo claro" width={150} height={150} />
        </div>
        <h1 className="text-4xl md:text-7xl font-bold mb-6 leading-tight">
          Internet de Alta Velocidade
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-white/90 font-light">
          Conecte-se com os melhores planos de fibra ótica do mercado. Velocidade garantida, instalação grátis!
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            onClick={onScrollToPlans}
            size="lg"
            className="bg-white text-primary hover:bg-white/90 text-lg px-8 py-6 font-semibold shadow-glow cursor-pointer"
          >
            Ver Planos
          </Button>
          <Button
            onClick={handleHireNow}
            variant="outline"
            size="lg"
            className="bg-white text-primary hover:bg-white/90 text-lg px-8 py-6 font-semibold shadow-glow cursor-pointer"
          >
            Falar com Consultor
          </Button>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16 pt-16 border-t border-white/20">
          <div className="text-center">
            <div className="text-4xl font-bold mb-2">1M+</div>
            <div className="text-white/80">Clientes Conectados</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold mb-2">99.9%</div>
            <div className="text-white/80">Estabilidade</div>
          </div>
          <div className="text-center">
            <div className="text-4xl font-bold mb-2">24h</div>
            <div className="text-white/80">Suporte Técnico</div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/50 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;