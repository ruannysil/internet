import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Check, Shield, Wifi, Zap } from "lucide-react";

interface PlanCardProps {
  title: string;
  speed: string;
  price: string;
  originalPrice?: string;
  features: string[];
  isPopular?: boolean;
  onSelect: () => void;
}

const PlanCard = ({ title, speed, price, originalPrice, features, isPopular, onSelect }: PlanCardProps) => {
  return (
    <Card className={`relative p-8 transition-all duration-300 hover:scale-105 hover:shadow-card ${isPopular
      ? 'bg-gradient-to-r from-red-500 to-red-600 text-white border-red-500 shadow-glow'
      : 'bg-card hover:border-red-500/20'

      }`}>
      {isPopular && (
        <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
          <div className="bg-white text-red-500 px-4 py-1 rounded-full text-sm font-bold">
            MAIS POPULAR
          </div>
        </div>
      )}

      <div className="text-center mb-6">
        <div className={`w-16 h-16 mx-auto mb-4 rounded-full flex items-center justify-center ${isPopular ? 'bg-white/20' : 'bg-red-500/10'
          }`}>
          <Wifi className={`w-8 h-8 ${isPopular ? 'text-white' : 'text-red-500'}`} />
        </div>

        <h3 className={`text-2xl font-bold mb-2 ${isPopular ? 'text-white' : 'text-foreground'}`}>
          {title}
        </h3>

        <div className={`text-4xl font-bold mb-1 ${isPopular ? 'text-white' : 'text-red-500'}`}>
          {speed}
        </div>

        <div className="flex items-center justify-center gap-2 mb-4">
          {originalPrice && (
            <span className={`text-lg line-through ${isPopular ? 'text-white/60' : 'text-muted-foreground'}`}>
              {originalPrice}
            </span>
          )}
          <span className={`text-3xl font-bold ${isPopular ? 'text-white' : 'text-red-500'}`}>
            {price}
          </span>
          <span className={`text-sm ${isPopular ? 'text-white/80' : 'text-muted-foreground'}`}>
            /mês
          </span>
        </div>
      </div>

      <div className="space-y-3 mb-8">
        {features.map((feature, index) => (
          <div key={index} className="flex items-center gap-3">
            <div className={`w-5 h-5 rounded-full flex items-center justify-center ${isPopular ? 'bg-white/20' : 'bg-red-500/10'
              }`}>
              <Check className={`w-3 h-3 ${isPopular ? 'text-white' : 'text-red-500'}`} />
            </div>
            <span className={`text-sm ${isPopular ? 'text-white' : 'text-foreground'}`}>
              {feature}
            </span>
          </div>
        ))}
      </div>

      <Button
        onClick={onSelect}
        className={`w-full py-6 text-lg font-semibold transition-all cursor-pointer ${isPopular
          ? 'bg-white text-red-500 hover:bg-white/90'
          : 'bg-red-500 text-white hover:bg-red-500/90 shadow-glow'
          }`}
      >
        Contratar Agora
      </Button>

      <div className="flex items-center justify-center gap-4 mt-4 pt-4 border-t border-current/20">
        <div className="flex items-center gap-1">
          <Zap className={`w-4 h-4 ${isPopular ? 'text-white' : 'text-red-500'}`} />
          <span className={`text-xs ${isPopular ? 'text-white/80' : 'text-muted-foreground'}`}>
            Instalação Grátis
          </span>
        </div>
        <div className="flex items-center gap-1">
          <Shield className={`w-4 h-4 ${isPopular ? 'text-white' : 'text-red-500'}`} />
          <span className={`text-xs ${isPopular ? 'text-white/80' : 'text-muted-foreground'}`}>
            Garantia Total
          </span>
        </div>
      </div>
    </Card>
  );
};

export default PlanCard;