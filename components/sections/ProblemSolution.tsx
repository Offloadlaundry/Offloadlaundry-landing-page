import { problemSolutionContent } from "@/content/sections";
import Container from "@/components/ui/Container";

export default function ProblemSolution() {
  return (
    <section id="kenapa" className="py-20 lg:py-28 bg-background">
      <Container>
        <div className="max-w-2xl mx-auto text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-black text-primary leading-tight mb-4">{problemSolutionContent.headline}</h2>
          <p className="text-gray-600 leading-relaxed">{problemSolutionContent.supportingCopy}</p>
        </div>
        <div className="grid sm:grid-cols-3 gap-6">
          {problemSolutionContent.benefits.map((benefit) => (
            <div key={benefit.title} className="group bg-white border border-gray-100 rounded-2xl p-7 shadow-sm hover:shadow-md hover:border-secondary transition-all">
              <div className="w-12 h-12 rounded-xl bg-secondary/40 flex items-center justify-center mb-4 group-hover:bg-secondary transition-colors">
                <span className="text-2xl">{benefit.icon}</span>
              </div>
              <h3 className="text-lg font-bold text-primary mb-2">{benefit.title}</h3>
              <p className="text-gray-500 text-sm leading-relaxed">{benefit.description}</p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  );
}
