import Image from "next/image";
import { problemSolutionContent } from "@/content/sections";
import Container from "@/components/ui/Container";

const iconMap: Record<string, string> = {
  "Lebih Praktis": "/Icon-Reliability-Sand_Beige_Reliability.png",
  "Lebih Banyak Waktu": "/Icon-Time_Saving-Sand_Beige_Time saving.png",
  "Lebih Mudah Diakses": "/Icon-Location-Sand_Beige_Location.png",
};

export default function ProblemSolution() {
  return (
    <section id="kenapa" className="py-20 lg:py-28 bg-background">
      <Container>
        <div className="max-w-2xl mx-auto text-center mb-14">
          <h2 className="text-3xl sm:text-4xl font-black text-primary leading-tight mb-4">{problemSolutionContent.headline}</h2>
          <p className="text-gray-600 leading-relaxed">{problemSolutionContent.supportingCopy}</p>
        </div>
        <div className="grid sm:grid-cols-3 gap-6">
          {problemSolutionContent.benefits.map((benefit) => {
            const isLocationIcon = benefit.title === "Lebih Mudah Diakses";
            return (
              <div key={benefit.title} className="group bg-white border border-gray-100 rounded-2xl p-7 shadow-sm hover:shadow-md hover:border-secondary transition-all">
                <div className={`rounded-xl bg-primary flex items-center justify-center mb-4 group-hover:bg-primary-light transition-colors ${isLocationIcon ? 'w-24 h-32 overflow-visible' : 'w-24 h-24 overflow-hidden'}`}>
                  <Image
                    src={iconMap[benefit.title] || benefit.icon}
                    alt={benefit.title}
                    width={isLocationIcon ? 60 : 80}
                    height={isLocationIcon ? 100 : 80}
                    className="object-contain object-center"
                  />
                </div>
                <h3 className="text-lg font-bold text-primary mb-2">{benefit.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{benefit.description}</p>
              </div>
            );
          })}
        </div>
      </Container>
    </section>
  );
}
