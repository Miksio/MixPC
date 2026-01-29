import { Card, CardContent } from "@/components/ui/card"
import { Star, Quote } from "lucide-react"

const testimonials = [
  {
    name: "Anna Kowalska",
    location: "Warszawa",
    text: "Laptop nie włączał się od tygodnia. Pan przyjechał w godzinę, wymienił dysk i wszystko działa jak nowe. Polecam każdemu!",
    rating: 5
  },
  {
    name: "Marek Nowak",
    location: "Kraków",
    text: "Profesjonalna obsługa, uczciwe ceny. Odzyskali mi wszystkie zdjęcia z uszkodzonego dysku. Dziękuję!",
    rating: 5
  },
  {
    name: "Katarzyna Wiśniewska",
    location: "Wrocław",
    text: "Szybko, tanio i skutecznie. Mój komputer znowu chodzi jak rakieta po wymianie na SSD. Super kontakt!",
    rating: 5
  }
]

export function TestimonialsSection() {
  return (
    <section id="opinie" className="py-16 md:py-24 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">
            Opinie klientów
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Zobacz, co mówią o nas nasi zadowoleni klienci
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.name} className="relative">
              <CardContent className="p-6">
                <Quote className="absolute top-4 right-4 h-8 w-8 text-primary/20" />
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-primary text-primary" />
                  ))}
                </div>
                <p className="text-muted-foreground mb-4 text-pretty">
                  {`"${testimonial.text}"`}
                </p>
                <div>
                  <p className="font-semibold text-secondary">{testimonial.name}</p>
                  <p className="text-sm text-muted-foreground">{testimonial.location}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
