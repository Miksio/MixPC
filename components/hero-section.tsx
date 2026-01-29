import { Button } from "@/components/ui/button"
import { Phone, CheckCircle2, ArrowRight } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative overflow-hidden bg-secondary py-16 md:py-24 lg:py-32">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(52,211,153,0.15),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(52,211,153,0.1),transparent_50%)]" />
      
      <div className="container relative mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/20 text-primary mb-6">
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
            </span>
            <span className="text-sm font-medium">Dojazd w ciągu 60 minut</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-secondary-foreground leading-tight text-balance mb-6">
            Mobilny serwis komputerowy z{" "}
            <span className="text-primary">dojazdem do Ciebie</span>
          </h1>
          
          <p className="text-lg md:text-xl text-secondary-foreground/80 mb-8 max-w-2xl mx-auto text-pretty">
            Naprawiamy komputery, laptopy i telefony. Przyjeżdżamy do domu lub biura. 
            Bez stresu, bez kolejek, bez wychodzenia z domu.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
            <Button asChild size="lg" className="text-base px-8">
              <a href="tel:+48123456789">
                <Phone className="mr-2 h-5 w-5" />
                Zadzwoń teraz
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="text-base px-8 border-secondary-foreground/20 text-secondary-foreground hover:bg-secondary-foreground/10 bg-transparent">
              <a href="#cennik">
                Zobacz cennik
                <ArrowRight className="ml-2 h-5 w-5" />
              </a>
            </Button>
          </div>
          
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-8 text-sm text-secondary-foreground/70">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-5 w-5 text-primary" />
              <span>Bezpłatna wycena</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-5 w-5 text-primary" />
              <span>Gwarancja na naprawę</span>
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="h-5 w-5 text-primary" />
              <span>Płatność po naprawie</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
