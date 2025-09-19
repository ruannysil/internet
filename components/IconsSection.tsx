import { Card } from "@/components/ui/card";
import { Gamepad2, Monitor, Router, Smartphone, Tv, Wifi } from "lucide-react";

const IconsSection = () => {
  const icons = [
    {
      Icon: Wifi,
      title: "Internet Fibra",
      description: "Velocidade ultra-rápida",
      color: "from-blue-500 to-blue-600"
    },
    {
      Icon: Tv,
      title: "TV Digital",
      description: "Canais em HD/4K",
      color: "from-purple-500 to-purple-600"
    },
    {
      Icon: Smartphone,
      title: "Móvel Integrado",
      description: "Plano celular incluso",
      color: "from-green-500 to-green-600"
    },
    {
      Icon: Gamepad2,
      title: "Gaming Pro",
      description: "Latência ultra-baixa",
      color: "from-red-500 to-red-600"
    },
    {
      Icon: Monitor,
      title: "Streaming 4K",
      description: "Netflix, Prime, Disney+",
      color: "from-orange-500 to-orange-600"
    },
    {
      Icon: Router,
      title: "Wi-Fi 6E",
      description: "Roteador premium",
      color: "from-cyan-500 to-cyan-600"
    }
  ];

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-background via-red-500/5 to-white/10">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Tecnologia de Ponta
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Equipamentos e serviços premium para uma experiência completa
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {icons.map((item, index) => (
            <Card
              key={index}
              className="relative p-6 text-center transition-all duration-500 md:hover:scale-110 md:hover:shadow-2xl bg-card border-primary/10 group overflow-hidden cursor-pointer active:scale-110 active:shadow-2xl hover:scale-110 hover:shadow-2xl"
            >

              <div className="relative z-10">
                <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br ${item.color} 
                flex items-center justify-center shadow-xl transform transition-all duration-500 
                md:group-hover:rotate-12 md:group-hover:scale-110 `}
                  style={{
                    filter: 'drop-shadow(0 10px 20px rgba(7, 7, 7, 0.205))',
                    transform: 'perspective(1000px) rotateX(10deg) rotateY(-10deg)'
                  }}>
                  <item.Icon className="w-8 h-8 text-white" />
                </div>


                <h3 className="font-bold text-foreground mb-2 text-sm group-hover:text-primary transition-colors">
                  {item.title}
                </h3>
                <p className="text-xs text-muted-foreground">
                  {item.description}
                </p>
              </div>

              <div className="absolute -top-2 -right-2 w-6 h-6 bg-red-700/50 rounded-full animate-ping opacity-0 group-hover:opacity-100"></div>
            </Card>
          ))}
        </div>

        <div className="mt-16 flex justify-center">
          <div className="relative">
            <div className="w-32 h-32 bg-gradient-to-b bg-red-700 rounded-full flex items-center justify-center shadow-2xl animate-bounce"
              style={{
                filter: 'drop-shadow(0 20px 40px rgba(239, 68, 68, 0.151))',
                transform: 'perspective(1000px) rotateX(15deg)'
              }}>
              <Wifi className="w-16 h-16 text-white animate-pulse" />
            </div>

            <div className="absolute -top-4 -right-4 w-8 h-8 bg-yellow-400 rounded-full animate-bounce"
              style={{ transform: 'perspective(500px) rotateX(45deg)' }}></div>
            <div className="absolute -bottom-4 -left-4 w-6 h-6 bg-blue-400 rounded-full animate-bounce"
              style={{ transform: 'perspective(500px) rotateY(45deg)' }}></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default IconsSection;