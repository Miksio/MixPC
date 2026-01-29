import { Button } from "@/components/ui/button"
import { Phone, MessageCircle } from "lucide-react"

export function CtaSection() {
  return (
    <section className="py-16 md:py-20 bg-primary">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-foreground mb-4">
            Potrzebujesz pomocy?
          </h2>
          <p className="text-primary-foreground/80 mb-8 text-lg">
            Zadzwoń teraz i umów się na wizytę. Jesteśmy dostępni od poniedziałku do soboty.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button asChild size="lg" variant="secondary" className="text-base px-8">
              <a href="tel:+48123456789">
                <Phone className="mr-2 h-5 w-5" />
                +48 123 456 789
              </a>
            </Button>
            <Button asChild size="lg" variant="outline" className="text-base px-8 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 bg-transparent">
              <a href="https://wa.me/48123456789" target="_blank" rel="noopener noreferrer">
                <MessageCircle className="mr-2 h-5 w-5" />
                Napisz na WhatsApp
              </a>
            </Button>
          </div>
          
          <p className="text-primary-foreground/60 text-sm mt-6">
            Pn-Pt: 8:00-20:00 | Sb: 9:00-16:00
          </p>
        </div>
      </div>
    </section>
  )
}
