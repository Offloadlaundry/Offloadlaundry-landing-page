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
            <div className="relative w-72 h-72 lg:w-80 lg:h-80">
              <div className="absolute inset-0 rounded-3xl bg-white/5 border border-white/10" />
              <div className="absolute inset-4 rounded-2xl bg-white/5 border border-white/10" />
              <div className="absolute inset-8 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center">
                <div className="text-center">
                  <div className="text-6xl mb-2">👕</div>
                  <div className="text-white/60 text-sm font-medium">OffLoad Laundry</div>
                  <div className="text-secondary text-xs mt-1">Segera Hadir</div>
                </div>
              </div>
              <div className="absolute top-2 right-2 w-3 h-3 rounded-full bg-accent" />
              <div className="absolute bottom-6 left-4 w-2 h-2 rounded-full bg-secondary/50" />
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
}
