import Image from "next/image";
import { Button } from "./ui/button";
import { Card } from "./ui/card";

interface PlansSectionProps {
  onPlanSelect: (planTitle: string) => void;
}

const PlansSection = ({ onPlanSelect }: PlansSectionProps) => {


  return (
    <section className="py-20 px-4 bg-secondary/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Escolha o Plano Ideal
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Oferecemos os melhores planos de internet fibra ótica com velocidade garantida, instalação gratuita e suporte 24 horas.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 md:gap-6 gap-10 max-w-7xl mx-auto">

        </div>
        <div className=" md:gap-6 gap-10 max-w-7xl mx-auto">
          <div>
            <h2 className="text-xl md:text-3xl font-bold mb-6 text-foreground">
              A internet mais rápida para sua casa.
            </h2>
            <div className="grid md:grid-cols-2 grid-cols-1 md:w-1/2   gap-4 mb-6">
              <Card className="md:w-[320px]  w-full rounded-2xl shadow-lg border border-gray-200 p-6 text-center ">
           
                <div className="flex justify-center items-center gap-2">
                  <div className="relative w-36 h-16 md:w-48 md:h-16">
                    <Image
                      src="/claro-fibra.png"
                      alt="Claro Fibra"
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>


                <div className="border-t border-gray-200" />
                <div className="text-red-600 font-bold flex flex-col items-start leading-tight md:-space-y-3">
                  <p>Fibra</p>
                  <h1 className="md:text-5xl text-4xl">350</h1>
                  <h1 className="md:text-5xl text-4xl">MEGA</h1>
                </div>
                <div className="">
                  <p className="text-sm text-red-600 font-semibold">POR APENAS</p>
                  <p className="text-4xl font-bold text-red-600">
                    R$99<span className="text-2xl">,90</span>
                    <span className="text-base font-medium text-gray-600"> /mês</span>
                  </p>
                </div>
                <Button
                  onClick={() => onPlanSelect("Fibra 350")}
                  size="lg"
                  className="bg-red-600 hover:bg-red-800 text-white font-semibold rounded-full px-10 cursor-pointer text-lg"
                >
                  Assine
                </Button>
              </Card>

              <Card className="md:w-[320px]  w-full rounded-2xl shadow-lg border border-gray-200 p-6 text-center ">

                <div className="flex justify-center items-center gap-2">
                  <div className="relative w-36 h-16 md:w-48 md:h-16">
                    <Image
                      src="/claro-fibra.png"
                      alt="Claro Fibra"
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>

                <div className="border-t border-gray-200" />
                <div className="text-red-600 font-bold flex flex-col items-start leading-tight md:-space-y-3">
                  <p>Fibra</p>
                  <h1 className="md:text-5xl text-4xl">500</h1>
                  <h1 className="md:text-5xl text-4xl">MEGA</h1>
                </div>
                <div className="">
                  <p className="text-sm text-red-600 font-semibold">POR APENAS</p>
                  <p className="text-4xl font-bold text-red-600">
                    R$119<span className="text-2xl">,90</span>
                    <span className="text-base font-medium text-gray-600"> /mês</span>
                  </p>

                </div>
                <Button
                  onClick={() => onPlanSelect("Fibra 500")}
                  size="lg"
                  className="bg-red-600 hover:bg-red-800 text-white font-semibold rounded-full px-10 cursor-pointer text-lg"
                >
                  Assine
                </Button>
              </Card>
            </div>

          </div>
          <h2 className="text-xl md:text-3xl font-bold mb-8 text-foreground">
            E ainda + diversão e conteúdo em todas as telas.
          </h2>
          <Card className="md:w-[320px] w-full rounded-2xl shadow-lg border border-gray-200 p-6 text-center relative">
            <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
              <div className="bg-red-500 text-white px-4 py-1 rounded-full text-sm font-bold">
                MAIS POPULAR
              </div>
            </div>

            <div className="flex justify-center items-center gap-2">
              <div className="relative w-36 h-16 md:w-48 md:h-16">
                <Image
                  src="/claro-tv.png"
                  alt="Claro TV"
                  fill
                  className="object-contain"
                />
              </div>
            </div>


            <div className="border-t border-gray-200" />
            <div className="flex justify-center flex-col items-center gap-4">
              <Image src="/tv-apps.png" alt="Apple TV+" width={230} height={230} />
              <h1 className="font-bold text-xl">
                + de 120 canais ao vivo
              </h1>
            </div>
            <div className="">
              <p className="text-sm text-red-600 font-semibold">POR APENAS</p>
              <p className="text-4xl font-bold text-red-600">
                R$119<span className="text-2xl">,90</span>
                <span className="text-base font-medium text-gray-600"> /mês</span>
              </p>
              <p className="text-xs text-gray-500">
                No plano Netflix, HBO Max, Apple tv, Globo play.
              </p>
            </div>
            <Button
              onClick={() => onPlanSelect("TVBox + 120 Canais")}
              size="lg"
              className="bg-red-600 hover:bg-red-800 text-white font-semibold rounded-full px-10 cursor-pointer text-lg"
            >
              Assine
            </Button>
          </Card>
        </div>


        <div className="text-center mt-12">
          <p className="text-muted-foreground mb-4">
            Todas as ofertas válidas para novos clientes
          </p>
          <div className="flex flex-wrap justify-center gap-6 text-sm text-muted-foreground">
            <span>✓ Fibra ótica 100% estável</span>
            <span>✓ Velocidade simétrica</span>
            <span>✓ IP fixo gratuito</span>
            <span>✓ Sem taxa de adesão</span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PlansSection;