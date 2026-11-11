import { howItWorksContent } from "@/content/sections";
import Container from "@/components/ui/Container";

const stepIcons = ["🧺", "⚙️", "✨"];

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
              <div className="w-20 h-20 rounded-full bg-primary text-white flex flex-col items-center justify-center mx-auto mb-5 shadow-lg">
                <span className="text-xs font-semibold text-white/60">{step.number}</span>
                <span className="text-xl mt-0.5">{stepIcons[i]}</span>
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
