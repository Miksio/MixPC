"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Star, Quote } from "lucide-react"
import { useLanguage } from "@/lib/language-context"

const testimonials = [
  {
    name: "Zuzanna J.",
    location: "Gdańsk",
    text: "Od jakiegoś czasu miałam problem z laptopem. Po około godziny od zadzwonienia przyjechał serwisant, zdiagnozował problem, zamówił odpowiedni dysk i po wymianie laptop działa jak nowy. Polecam.",
    rating: 5
  },
  {
    name: "Bartek K.",
    location: "Gdynia",
    text: "Nie byłem w stanie podłączyć drukarki do komputera. Jeden telefon i serwisant zdalnie podłączył się z moim laptopem i rozwiązał problem w niecałe 10 minut.",
    rating: 5
  },
  {
    name: "Jędrzej S.",
    location: "Gdańsk",
    text: "Zamówiłem komputer w określonym budżecie. Dostałem listę części dopasowaną do moich potrzeb i krótkie wytłumaczenie, co warto wybrać. Po złożeniu komputer został przywieziony do domu gotowy do uruchomienia — wszystko działa bez problemu. Polecam.",
    rating: 5
  }
]

const testimonials_en = [
  {
    name: "Zuzanna J.",
    location: "Gdańsk",
    text: "I had issues with my laptop for some time. About an hour after calling, a technician arrived, diagnosed the problem, ordered the right drive and after the replacement my laptop works like new. Highly recommended.",
    rating: 5
  },
  {
    name: "Bartek K.",
    location: "Gdynia",
    text: "I couldn't connect my printer to the computer. One phone call and the technician connected remotely to my laptop and fixed the problem in under 10 minutes.",
    rating: 5
  },
  {
    name: "Jędrzej S.",
    location: "Gdańsk",
    text: "I ordered a PC within a set budget. I received a parts list tailored to my needs and a short explanation of what to choose. After assembly the PC was delivered to my home ready to use — everything works perfectly. Recommended.",
    rating: 5
  }
]

export function TestimonialsSection() {
  const { t, language } = useLanguage()
  const activeTestimonials = language === "en" ? testimonials_en : testimonials
  return (
    <section id="opinie" className="py-16 md:py-24 bg-muted">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">
            {t.testimonials.title}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {t.testimonials.subtitle}
          </p>
          {language === "en" && t.testimonials.translatedNote ? (
            <p className="text-xs text-muted-foreground/60 mt-2">{t.testimonials.translatedNote}</p>
          ) : null}
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {activeTestimonials.map((testimonial) => (
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
