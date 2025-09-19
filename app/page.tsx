'use client';

import ContractForm from "@/components/ContractForm";
import Hero from "@/components/Hero";
import IconsSection from "@/components/IconsSection";
import PlansSection from "@/components/PlansSection";
import TestimonialCard from "@/components/TestimonialCard";
import VideoSection from "@/components/VideoSection";
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
    </div>
  );
}
