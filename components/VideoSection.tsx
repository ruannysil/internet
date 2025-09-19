import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Pause, Play, Volume2, VolumeX } from "lucide-react";
import { useState } from "react";


const VideoSection = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(true);

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


  const handlePlayPause = () => {
    const video = document.getElementById("hero-video") as HTMLVideoElement;
    if (video) {
      if (isPlaying) {
        video.pause();
        setIsPlaying(false);
      } else {
        video.play();
        setIsPlaying(true);
      }
    }
  };

  const handleMute = () => {
    const video = document.getElementById("hero-video") as HTMLVideoElement;
    if (video) {
      video.muted = !isMuted;
      setIsMuted(!isMuted);
    }
  };

  return (
    <section className="py-20 px-4 bg-gradient-to-br from-primary/5 via-background to-secondary/10">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Veja Como Funciona Nossa Internet
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Descubra a qualidade da nossa fibra ótica e como ela pode transformar sua experiência digital
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <Card className="relative overflow-hidden rounded-2xl shadow-2xl group py-0">
            <div className="relative aspect-video bg-gradient-to-br from-primary/20 to-secondary/20 ">
              <div className="relative aspect-video bg-gradient-to-br from-primary/20 to-secondary/20">
                <video
                  id="hero-video"
                  className="absolute inset-0 w-full h-full object-cover cursor-pointer"
                  poster="/banner.png"
                  muted={isMuted}
                  loop
                  playsInline
                  onClick={handlePlayPause}
                >
                  <source src="/video-claro.mp4" type="video/mp4" />
                  Seu navegador não suporta vídeo HTML5.
                </video>
              </div>


              {/* Overlay */}
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-all duration-300 pointer-events-none">
                {/* Botão central só aparece quando está pausado */}
                {!isPlaying && (
                  <div className="absolute inset-0 flex items-center justify-center pointer-events-auto">
                    <Button
                      onClick={handlePlayPause}
                      size="lg"
                      className="w-20 h-20 rounded-full bg-red-500/90 hover:bg-red text-white shadow-2xl transition-all duration-300 hover:scale-110"
                    >
                      {isPlaying ? (
                        <Pause strokeWidth={2.75} className="w-8 h-8" />

                      ) : (
                        <Play strokeWidth={2.75} className="w-8 h-8 ml-1" />
                      )}
                    </Button>
                  </div>
                )}

                {/* Controle de volume */}
                <div className="absolute bottom-4 right-4 flex gap-2 pointer-events-auto">
                  <Button
                    onClick={handleMute}
                    size="sm"
                    variant="secondary"
                    className="bg-red-500/90 hover:bg-red text-white cursor-pointer"
                  >
                    {isMuted ? <VolumeX className="w-4 h-4" strokeWidth={2.75} /> : <Volume2 className="w-4 h-4" strokeWidth={2.75} />}
                  </Button>
                </div>
              </div>

            </div>
          </Card>

          {/* Content */}
          <div className="space-y-8">
            <div>
              <h3 className="text-3xl font-bold text-foreground mb-4">
                Internet Fibra Ótica de Verdade
              </h3>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Nossa tecnologia de fibra ótica garante velocidade simétrica e estabilidade 24 horas por dia.
                Perfeita para trabalho, entretenimento e toda sua família conectada.
              </p>
            </div>

            <div className="grid grid-cols-2 gap-6">
              <div className="text-center p-6 bg-card rounded-xl border border-red-500/20 hover:shadow-lg transition-all">
                <div className="w-12 h-12 mx-auto mb-3 bg-gradient-to-b bg-red-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-xl">99%</span>
                </div>
                <h4 className="font-semibold text-foreground mb-2">Estabilidade</h4>
                <p className="text-sm text-muted-foreground">Uptime garantido</p>
              </div>

              <div className="text-center p-6 bg-card rounded-xl border border-red-500/20 hover:shadow-lg transition-all">
                <div className="w-12 h-12 mx-auto mb-3 bg-gradient-to-b bg-red-600 rounded-full flex items-center justify-center">
                  <span className="text-white font-bold text-xl">24h</span>
                </div>
                <h4 className="font-semibold text-foreground mb-2">Suporte</h4>
                <p className="text-sm text-muted-foreground">Técnico especializado</p>
              </div>
            </div>

            <Button onClick={handleHireNow} size="lg" className="w-full bg-gradient-to-b bg-red-600 hover:bg-white hover:text-red-500  cursor-pointer text-white hover:shadow-lg transition-all">
              Quero Contratar Agora
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VideoSection;
