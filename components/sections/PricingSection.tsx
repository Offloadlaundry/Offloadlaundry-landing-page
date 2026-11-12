"use client";
import Image from "next/image";
import Container from "@/components/ui/Container";

export default function PricingSection() {
  return (
    <section className="bg-gradient-to-br from-primary via-primary to-primary-light py-12 lg:py-20 overflow-hidden">
      <Container>
        <div className="w-full max-w-5xl mx-auto">
          <Image
            src="/Offload Laundry Subscription Plans.png"
            alt="OFFLOAD Laundry - Berlangganan dan Regular Plans"
            width={1024}
            height={683}
            className="w-full h-auto rounded-lg shadow-2xl"
            priority
          />
        </div>
      </Container>
    </section>
  );
}
