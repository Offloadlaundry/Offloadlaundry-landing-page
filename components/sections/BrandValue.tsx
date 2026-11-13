import Image from "next/image";
import { brandValueContent } from "@/content/sections";
import Container from "@/components/ui/Container";

export default function BrandValue() {
  return (
    <section className="py-20 lg:py-28 bg-primary text-white overflow-hidden">
      <Container>
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black leading-tight mb-6 whitespace-pre-line">{brandValueContent.headline}</h2>
            <p className="text-white/75 text-lg leading-relaxed max-w-md">{brandValueContent.bodyCopy}</p>
            <div className="mt-8 flex items-center gap-4">
              <div className="w-12 h-1 rounded-full bg-accent" />
              <span className="text-secondary text-sm font-medium">Segera Hadir di SCBD</span>
            </div>
          </div>
          <div className="flex justify-center lg:justify-end">
            <div className="relative w-80 h-96 lg:w-96 lg:h-96">
              <Image
                src="/offload-logo.png"
                alt="OffLoad Laundry Logo"
                fill
                className="object-contain"
              />
              <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-secondary text-sm font-medium">
                Segera Hadir
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
