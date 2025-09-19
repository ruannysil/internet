import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { CheckCircle, Quote, Star, Wifi, Zap } from "lucide-react";
import { useState } from "react";

const TestimonialCard = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-background via-secondary/20 to-red-500/5">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            O Que Nossos Clientes Dizem
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Milhares de famílias já confiam na nossa internet fibra ótica
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {/* Testimonial 1 */}
          <Card
            className="relative p-8 transition-all duration-500 hover:scale-105 hover:shadow-xl bg-card border-red-500/20 overflow-hidden group"
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
          >
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-b bg-red-500/20 rounded-full opacity-10 animate-pulse"></div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-red-500/20 rounded-full animate-bounce"></div>

            <CardContent className="p-0 relative z-10">
              <div className="flex items-center gap-4 mb-6">
                <div className="relative">
                  <Avatar className="w-16 h-16 border-4 border-red-500/20 shadow-lg">
                    <AvatarImage
                      src="https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face"
                      alt="Maria Silva"
                      className="object-cover"
                    />
                    <AvatarFallback className="bg-gradient-to-b bg-red-500 text-white text-xl font-bold">MS</AvatarFallback>
                  </Avatar>
                  <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full border-2 border-white flex items-center justify-center">
                    <CheckCircle className="w-4 h-4 text-white" />
                  </div>
                </div>

                <div>
                  <h4 className="font-bold text-foreground text-lg">Maria Silva</h4>
                  <p className="text-muted-foreground text-sm">Cliente há 2 anos</p>
                  <div className="flex items-center gap-1 mt-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>
              </div>

              <div className="relative mb-6">
                <Quote className="absolute -top-2 -left-2 w-8 h-8 text-primary/30" />
                <p className="text-foreground italic pl-6">
                  "Desde que contratei a internet fibra, minha vida mudou! Trabalho home office sem travamentos e assisto Netflix em 4K sem buffering."
                </p>
              </div>

              <div className="flex items-center justify-between">
                <Badge variant="secondary" className="gap-2">
                  <Wifi className="w-4 h-4" />
                  350MB Fibra
                </Badge>

                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1 text-green-500">
                    <Zap className="w-4 h-4 animate-pulse" />
                    <span className="text-xs font-semibold">Velocidade Real</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="relative p-8 transition-all duration-500 hover:scale-105 hover:shadow-xl bg-gradient-to-b bg-red-500 text-white border-0 overflow-hidden group">
            <div className="absolute -top-4 -right-4 w-32 h-32 bg-white/10 rounded-full animate-spin-slow"></div>
            <div className="absolute -bottom-4 -left-4 w-20 h-20 bg-white/20 rounded-full animate-pulse"></div>

            <CardContent className="p-0 relative z-10">
              <div className="flex items-center gap-4 mb-6">
                <div className="relative">
                  <Avatar className="w-16 h-16 border-4 border-white/30 shadow-lg">
                    <AvatarImage
                      src="https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face"
                      alt="Ana Costa"
                      className="object-cover"
                    />
                    <AvatarFallback className="bg-white text-primary text-xl font-bold">AC</AvatarFallback>
                  </Avatar>
                  <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-400 rounded-full border-2 border-white flex items-center justify-center animate-bounce">
                    <CheckCircle className="w-4 h-4 text-white" />
                  </div>
                </div>

                <div>
                  <h4 className="font-bold text-white text-lg">Ana Costa</h4>
                  <p className="text-white/80 text-sm">Empresária</p>
                  <div className="flex items-center gap-1 mt-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-300 text-yellow-300" />
                    ))}
                  </div>
                </div>
              </div>

              <div className="relative mb-6">
                <Quote className="absolute -top-2 -left-2 w-8 h-8 text-white/30" />
                <p className="text-white italic pl-6">
                  "Perfeito para minha empresa! Conseguimos fazer videoconferências com clientes internacionais sem qualquer problema. Recomendo!"
                </p>
              </div>

              <div className="flex items-center justify-between">
                <Badge variant="secondary" className="gap-2 bg-white/20 text-white border-white/30">
                  <Wifi className="w-4 h-4" />
                  500MB Ultra
                </Badge>

                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1 text-green-300">
                    <Zap className="w-4 h-4 animate-pulse" />
                    <span className="text-xs font-semibold">Ultra Rápida</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="relative p-8 transition-all duration-500 hover:scale-105 hover:shadow-xl bg-card border-red-500/20 overflow-hidden group">
            <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-b bg-red-500/20 rounded-full opacity-10 animate-pulse"></div>
            <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-red-500/20 rounded-full animate-bounce"></div>

            <CardContent className="p-0 relative z-10">
              <div className="flex items-center gap-4 mb-6">
                <div className="relative">
                  <Avatar className="w-16 h-16 border-4 border-primary/20 shadow-lg">
                    <AvatarImage
                      src="https://images.unsplash.com/photo-1494790108755-2616b612b786?w=400&h=400&fit=crop&crop=face"
                      alt="Carla Mendes"
                      className="object-cover"
                    />
                    <AvatarFallback className="bg-gradient-primary text-black text-xl font-bold">CM</AvatarFallback>
                  </Avatar>
                  <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full border-2 border-white flex items-center justify-center">
                    <CheckCircle className="w-4 h-4 text-white" />
                  </div>
                </div>

                <div>
                  <h4 className="font-bold text-foreground text-lg">Carla Mendes</h4>
                  <p className="text-muted-foreground text-sm">Influencer Digital</p>
                  <div className="flex items-center gap-1 mt-1">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                    ))}
                  </div>
                </div>
              </div>

              <div className="relative mb-6">
                <Quote className="absolute -top-2 -left-2 w-8 h-8 text-primary/30" />
                <p className="text-foreground italic pl-6">
                  "Faço lives diárias e preciso de internet estável. Com essa fibra ótica, nunca mais tive problemas de conexão!"
                </p>
              </div>

              <div className="flex items-center justify-between">
                <Badge variant="secondary" className="gap-2">
                  <Wifi className="w-4 h-4" />
                  500MB Básico
                </Badge>

                <div className="flex items-center gap-2">
                  <div className="flex items-center gap-1 text-green-500">
                    <Zap className="w-4 h-4 animate-pulse" />
                    <span className="text-xs font-semibold">Estável 24h</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Stats Section */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 max-w-4xl mx-auto">
          <div className="text-center group">
            <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-b bg-red-500 rounded-full flex items-center justify-center transition-transform group-hover:scale-110">
              <Wifi className="w-8 h-8 text-white animate-pulse" />
            </div>
            <div className="text-3xl font-bold text-red-500 mb-2">99.9%</div>
            <div className="text-sm text-muted-foreground">Uptime Garantido</div>
          </div>

          <div className="text-center group">
            <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-b bg-red-500 rounded-full flex items-center justify-center transition-transform group-hover:scale-110">
              <CheckCircle className="w-8 h-8 text-white animate-pulse" />
            </div>
            <div className="text-3xl font-bold text-red-500 mb-2">10k+</div>
            <div className="text-sm text-muted-foreground">Clientes Satisfeitos</div>
          </div>

          <div className="text-center group">
            <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-b bg-red-500 rounded-full flex items-center justify-center transition-transform group-hover:scale-110">
              <Zap className="w-8 h-8 text-white animate-pulse" />
            </div>
            <div className="text-3xl font-bold text-red-500 mb-2">24h</div>
            <div className="text-sm text-muted-foreground">Suporte Técnico</div>
          </div>

          <div className="text-center group">
            <div className="w-16 h-16 mx-auto mb-4 bg-gradient-to-b bg-red-500 rounded-full flex items-center justify-center transition-transform group-hover:scale-110">
              <Star className="w-8 h-8 text-white animate-pulse" />
            </div>
            <div className="text-3xl font-bold text-red-500 mb-2">4.9</div>
            <div className="text-sm text-muted-foreground">Avaliação Média</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialCard;