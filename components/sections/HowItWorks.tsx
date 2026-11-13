import Image from "next/image";
import { howItWorksContent } from "@/content/sections";
import Container from "@/components/ui/Container";

const stepIcons = [
  "/Icon-Laundry_Basket-Sand_Beige_Laundry Basket.png",
  "/Icon-Process_washing_machine-Sand_Beige_Process_washing machine.png",
  "/Icon-Relaxed-Sand_Beige_Relaxed.png",
];

export default function HowItWorks() {
  return (
    <section id="cara-kerja" className="py-20 lg:py-28 bg-secondary/20">
      <Container>
        <div className="max-w-2xl mx-auto text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-black text-primary leading-tight mb-4">{howItWorksContent.headline}</h2>
          <p className="text-gray-600 leading-relaxed">{howItWorksContent.supportingCopy}</p>
        </div>
        <div className="grid sm:grid-cols-3 gap-8">
          {howItWorksContent.steps.map((step, i) => (
            <div key={step.number} className="text-center">
              <div className="w-32 h-32 rounded-full bg-primary flex flex-col items-center justify-center mx-auto mb-5 shadow-lg overflow-hidden">
                <Image
                  src={stepIcons[i]}
                  alt={step.title}
                  width={100}
                  height={100}
                  className="object-contain"
                />
              </div>
              <h3 className="text-base font-bold text-primary mb-2">{step.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{step.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
