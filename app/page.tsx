'use client';

import ContractForm from "@/components/ContractForm";
import Hero from "@/components/Hero";
import IconsSection from "@/components/IconsSection";
import PlansSection from "@/components/PlansSection";
import TestimonialCard from "@/components/TestimonialCard";
import { Button } from "@/components/ui/button";
import VideoSection from "@/components/VideoSection";
import Link from "next/link";
import { useRef, useState } from "react";

export default function Home() {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [selectedPlan, setSelectedPlan] = useState("");

  const plansRef = useRef<HTMLDivElement | null>(null);

  const handlePlanSelect = (planTitle: string) => {
    setSelectedPlan(planTitle);
    setIsFormOpen(true);
  };

  const scrollToPlans = () => {
    plansRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  const handleDeveloper = () => {
    const whatsappNumber = "5598987312479";
    const whatsappMessage = `
Olá! 👋 Sou da Noleto Tech.  

Estou interessado em desenvolver um projeto com vocês e gostaria de mais informações.  
Tenho interesse em soluções como:  
- Desenvolvimento de sites  
- Aplicativos mobile  
- Sistemas SaaS  
- Projetos sob medida  

Podemos conversar?
`.trim();

    const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(whatsappMessage)}`;
    window.open(whatsappUrl, "_blank");
  };

  return (
    <div className="min-h-screen">
      <Hero onScrollToPlans={scrollToPlans} /> {/* 👈 passa a função */}
      <VideoSection />
      <IconsSection />

      <div ref={plansRef}>
        <PlansSection onPlanSelect={handlePlanSelect} />
      </div>

      <TestimonialCard />

      <ContractForm
        isOpen={isFormOpen}
        onClose={() => setIsFormOpen(false)}
        selectedPlan={selectedPlan}
      />
      <footer className="text-black w-full items-center justify-center p-5 flex gap-1">
        <p>&copy; todos direito reservados</p>
        <Button onClick={handleDeveloper} className="bg-transparent hover:bg-transparent text-black cursor-pointer">
          <strong> Noleto tech</strong></Button>
      </footer>
    </div>
  );
}
